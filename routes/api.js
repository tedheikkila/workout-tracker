const router = require("express").Router();
const Exercise = require("../models/Exercise.js");


router.post("/api/workouts", ({ body }, res) => {
  Exercise.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});





// app.post("/submit", ({body}, res) => {
//   db.Exercise.create(body)
//     .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// db.Workout.create({ type: "Resistance" })
//     .then(dbWorkout => {
//         console.log(dbWorkout);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });

// db.Workout.create({ type: "Cardio" })
//     .then(dbWorkout => {
//         console.log(dbWorkout);
//     })
//     .catch(({ message }) => {
//         console.log(message);
//     });