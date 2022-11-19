const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    practitioner: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    hospitalID: {
      type: Number,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    timestamps: true,
  }
);

const Doctor = model("Doctor", doctorSchema);

module.exports = Doctor;
