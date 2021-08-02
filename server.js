const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const config = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", config);

db.Workout.create({ type: "Resistance" })
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });

db.Workout.create({ type: "Cardio" })
    .then(dbWorkout => {
        console.log(dbWorkout);
    })
    .catch(({ message }) => {
        console.log(message);
    });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});