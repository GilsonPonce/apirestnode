const express = require("express");
const apicache = require("apicache");
const router = express.Router();
const cache = apicache.middleware;
const workoutController = require("../../controllers/workoutController");


router
    .get("/",workoutController.getAllWorkouts)
    .get("/:workoutId",workoutController.getOneWorkout)
    .post("/",workoutController.createNewWorkout)
    .patch("/:workoutId",workoutController.updateOneWorkout)
    .delete("/:workoutId",workoutController.deleteOneWorkout);

module.exports = router;
