const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    agegroup: String,
    leader: String,
    yourGoal: String
});

module.exports = mongoose.model("User", user);  //export this function so that other files are allowed to access it