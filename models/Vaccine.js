const mongoose = require('mongoose');

const VaccinesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  vaccineName: {
    type: String,
    required: true
  },
  dateDue: {
    type: Date,
    default: Date
  },
  dateGiven: {
    type: Date,
    default: Date
  },
  type: {
    type: String,
    default: 'scheduled'
  }
});

module.exports = mongoose.model('vaccines', VaccinesSchema);
