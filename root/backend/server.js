const mongoose = require("mongoose");
const express = require("express");
const cors= require("cors");
const passport= require("passport");
const passportlocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcyptjs");
const expressSession = require("express-session");
const bodyParser = require("body-parser");

const app = express();