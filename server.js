const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
// const { MongoClient } = require('mongodb');

require("dotenv").config();
var app = express();
var router = express.Router();
app.use(cors());
app.use(express.json());

router.route("/").get((requqest, response) => {
  const res = { hello: "This is my API" };

  response.json(res);
});
app.use("/api", router);
//  const uri = process.env.ATLAS_URI;

const uri =
  "mongodb+srv://vitgar:pXeuNtutP6Z9Zddh@cluster0.lehay.mongodb.net/test?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log("ERROR: " + err));
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log("Mongo DB connection successful.");

const userRouter = require("./api/routes/users");
//   // const userRoute = router.route(userRoute);
app.use("/user", userRouter);

//   // client.close();
// });

// app.get('/', (request, response) => {
//   response.send('Welcome to this API');
// })

var port = process.env.PORT || 8090;
app.listen(port, () => console.log(`Listening on port ${port}`));

// router.route("/users/").get((request, response) => {
//   usersoperations.getUsers().then((result) => {
//     response.send(result);
//   });
// });

// router.route("/users/:id").get((request, response) => {
//   usersoperations.getUserById(request.params.id).then((result) => {
//     response.send(result.find((u) => u.Id === parseInt(request.params.id)));
//   });
// });

// router.route("/users/").post((request, response) => {
//   let user = {...request.body};
//   usersoperations.insertUser(user).then(result =>{
//   //Create Validate function
//   // request.check('email', 'Invalid email').isEmail();
//   response.status(201).json(result[0])
// });
// })

// router.route("/users/:id").put((request, response) => {
//   let user = {...request.body};
//   usersoperations.updateUser(user, request.params.id).then(result =>
//     response.status(201).json(user));
// })

// router.route("/lessonplans/").get((request, response) => {
//   lessonplansoperations.getLessonPLans().then((result) => {
//     response.send(result);
//   });
// });

// router.route("/lessonplans/:id").get((request, response) => {
//   lessonplansoperations.getLessonPlanById(request.params.id).then((result) => {
//     response.send(result[0]);
//   });
// });

// router.route("/schools/:id").get((request, response) => {
//   schoolsoperations.getSchoolById(request.params.id).then((result) => {
//     response.send(result[0]);
//   });
// });

// router.route("/schools/").get((request, response) => {
//   schoolsoperations.getSchools().then((result) => {
//     response.send(result);
//   });
// });
