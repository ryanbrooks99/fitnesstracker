const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({

  day: {
    type: Date,
    default: () => new Date()
  },

  exercises: [
    {
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
    
    }
  ]

},
{
  toJSON: {
    virtuals: true
  }
});

FitnessSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});


const fitnesstracker = mongoose.model("FitnessTracker", FitnessSchema);

module.exports = fitnesstracker;