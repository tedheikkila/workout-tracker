const db = require("../models")
const router = require("express").Router();

//gets last workout
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err)
    })
})

//gets workouts in range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err)
    })
})

// creates new workout in db 
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// updates a workout w/an exercise 
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
    { _id: req.params.id },
    {
      $inc: { totalDuration: req.body.duration },
      $push: { exercises: req.body }
    },
    { new: true }).then(dbWorkout => {
      res.json(dbWorkout)
    }).catch(err => {
      res.json(err)
    })
})

module.exports = router;
