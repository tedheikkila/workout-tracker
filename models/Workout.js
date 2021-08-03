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
      required: "Select Cardio or Resistance"
    },
    name: {
      type: String,
      required: "Name this exercise"
    },
    distance: Number,
    duration: {
      type: Number,
      required: "Enter your time in minutes"
    },
    weight: Number,
    sets: Number,
    reps: Number
  }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
