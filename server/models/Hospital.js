const { Schema, model } = require("mongoose");

const hospitalSchema = new Schema(
    {
      hospitalName: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      ZIP: {
        type: String,
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

  const Hospital = model("Hospital", hospitalSchema);

  module.exports = Hospital;