const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const config = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", config);

app.use(require("./routes/api.js"));
app.use(require("./routes/index.js"))

app.listen(PORT, () => {
    console.log(`App running on ${PORT}`);
});