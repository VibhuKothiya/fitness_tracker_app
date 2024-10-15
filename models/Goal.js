const mongoose = require('mongoose');
const goalSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  target: { type: Number, required: true },
  progress: { type: Number, default: 0 },
  duration: { type: String, required: true }, // weekly, monthly
}, { timestamps: true });

const Goal = mongoose.model('Goal', goalSchema);
module.exports = Goal;
