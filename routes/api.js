const router = require("express").Router();
const db = require("../models")


//gets last workout (tweak)
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch (err => {
    res.json(err)
  })
})

//gets workouts in range (tweak; what's range?)
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  .catch (err => {
    res.json(err)
  })
})

// creates new workout in db (should be fine)
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// updates a workout w/an exercise (should be fine)
router.put("/api/workouts/:id", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { exercises: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});



module.exports = router;
