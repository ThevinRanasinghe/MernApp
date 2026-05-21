require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose")
const workoutRouters = require('./routes/workouts')

// Creating express app
const app = express();

//middleware to get the JSON body with the req
app.use(express.json())

//application level middleware
app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

//route for response
app.use('/api/workouts', workoutRouters)

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //listening for Request on the defined Port Number
    app.listen(process.env.PORT, () => {
    console.log("Connected to Database and Server Started Running in Port", process.env.PORT);
});

})
.catch((error) => {
    console.log("Error in Database Connection")
})





