const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstname: firstname,
    lastname: lastname,
    username: String,
    password: String
});

module.exports = mongoose.model("User", user);  //export this function so that other files are allowed to access it