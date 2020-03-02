const mongoose = required('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  dob: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String,
    required: true
  },
  pregnancy: {
    type: Boolean
  },
  immunity: {
    type: Boolean,
    required: true
  },
  traveling: {
    type: Boolean,
    required: true
  },
  hiv: {
    type: Boolean,
    required: true
  },
  cd4: {
    type: String,
  },
  dormitory: {
    type: Boolean,
    required: true
  },
  healthCareWorker: {
    type: Boolean,
    required: true
  },
  conditions: {
    type: Boolean,
    required: true
  },
  otherFactors: {
    type: Boolean,
    required: true
  },
  zoster: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Members', MembersSchema);