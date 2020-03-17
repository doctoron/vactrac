const mongoose = require('mongoose');

const VaccinesSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  vaccineName: {
    type: String,
    required: [true, 'Would you like to search the MyVac list?']
  },
  dateDue: {
    type: Date,
    default: Date.now
  },
  dateReceived: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    default: 'scheduled'
  }
});

module.exports = mongoose.model('vaccines', VaccinesSchema);
