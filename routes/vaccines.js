const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Vaccine = require('../models/Vaccine');

// @route     GET api/vaccines
// @desc      Get all users vaccines
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const vaccines = await Vaccine.find({ user: req.user.id })
      .sort({ date: -1 })
    res.json(vaccines)
  } catch (err) {
    console.err(err.message);
    res.status(500).send("Server Error");
  }
});

// @route     POST api/vaccines
// @desc      Add new vaccine
// @access    Private
router.post('/',
  [auth,
    [
      check('vaccineName', 'Vaccine Name is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { vaccineName, dateDue, dateGiven, type } = req.body;

    try {
      const newVaccine = new Vaccine({
        vaccineName,
        dateDue,
        dateGiven,
        type,
        user: req.user.id
      });

      const vaccine = await newVaccine.save();

      res.json(vaccine);
    } catch (err) {
      console.error(er.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route     PUT api/vaccines/:id
// @desc      Update contact
// @access    Private
router.put('/:id', auth, async (req, res) => {
  const { vaccineName, dateDue, dateGiven, type } = req.body;

  // Build vaccine object based on submitted data
  const vaccineFields = {};
  if (vaccineName) vaccineFields.vaccineName = vaccineName;
  if (dateDue) vaccineFields.dateDue = dateDue;
  if (dateGiven) vaccineFields.dateGiven = dateGiven;
  if (type) vaccineFields.type = type;

  try {
    let vaccine = await Vaccine.findById(req.params.id);

    if (!vaccine) return res.status(404).json({ msg: 'Vaccine not found' });

    // Make sure user owns contact
    if (vaccine.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    contact = await Vaccine.findByIdAndUpdate(
      req.params.id,
      { $set: vaccineFields },
      { new: true }
    );

    res.json(vaccine);
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

// @route     DELETE api/vaccines/:id
// @desc      Delete contact
// @access    Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let vaccine = await Vaccine.findById(req.params.id);

    if (!vaccine) return res.status(404).json({ msg: 'Vaccine not found' });

    // Make sure user owns contact
    if (vaccine.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    await Vaccine.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Vaccine removed' });
  } catch (err) {
    console.error(er.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

