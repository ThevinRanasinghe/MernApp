const express = require("express")
const {
    createWorkout,
} = require('./controllers/workoutController')

const router = express.Router()

//GET all Workouts
router.get('/', (req,res) => {
    res.send("mssg: Get All Workouts")
} )

//GET a single Workout
router.get('/:id', (req, res) => {
    res.send("Get a Single Workout")
})

//POST a new workout
router.post('/', async (req, res) => {
    const {title,reps,load} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
})

//DELETE a workout
router.delete('/:id', (req, res) => {
    res.send("Delete a Workout")
})

//UPDATE a workout
router.patch('/:id', (req, res) => {
    res.send("Update a Workout")
})

module.exports = router