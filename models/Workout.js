const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
    },
    name: {
      type: String,
      trim: true,
    },
    distance: {
      type: Number,
      trim: true,
      default: 0
    },
    duration: {
      type: Number,
      trim: true,
      default: 0
    },
    weight: {
      type: Number,
      trim: true,
      default: 0
    },
    reps: {
      type: Number,
      trim: true,
      default: 0
    },
    sets: {
      type: Number,
      trim: true,
      default: 0
    },
  }],
  totalDuration: {
    type: Number,
    trim: true,
    default: 0
    }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
