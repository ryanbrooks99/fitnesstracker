const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required..."
  },

  type: {
    type: String,
    trim: true,
    required: "Type is required..."
  },

  weight: {
    type: Number
  },

  sets: {
    type: Number
  },

  reps: {
    type: Number
  },

  duration: {
    type: Number,
    required: "Duration is required..."
  },

  distance: {
    type: Number
  }


});
  


const fitnesstracker = mongoose.model("Fitness Tracker", FitnessSchema);

module.exports = fitnesstracker;