var express = require('express');
var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser")
const userModel = require("./users");

const app = express()

// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/menu', function (req, res, next) {
  res.render('menu');
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/contact', function (req, res, next) {
  res.render('contact');
});

router.get('/create', async function (req, res, next) {
  let createdmessage = await userModel.create({
    username: "qwerty10",
    email: "qwerty10@gmail.com",
    message: "qwerty",
  })
  res.send(createdmessage)
});


// router.post("/create", async (req, res) => {
//   var userdata = new userModel({
//     username: req.body.username,
//     email: req.body.email,
//     message: req.body.message,
//   })
//   res.send(userdata)
// });


// router.get('/create', function (req, res) {
//   const { username, email, message } = req.body
//   const userData = new userModel({ username, email, message })
  
//   userModel.send(userData)
// });

module.exports = router;
