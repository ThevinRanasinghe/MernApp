const express = require("express")
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
    } = require('../controllers/workoutsController.js')

const router = express.Router()

//GET all Workouts
router.get('/', getWorkouts)

//GET a single Workout
router.get('/:id', getWorkout)

//POST a new workout
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router