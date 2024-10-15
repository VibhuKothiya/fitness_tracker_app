const mongoose = require('mongoose');
const workoutLogSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  activity: { type: String, required: true },
  duration: { type: Number, required: true },
  caloriesBurned: { type: Number },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

const WorkoutLog = mongoose.model('WorkoutLog', workoutLogSchema);
module.exports = WorkoutLog;
