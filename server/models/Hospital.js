const { Schema, model } = require("mongoose");

const hospitalSchema = new Schema(
    {
      facility_id: {
        type: Number,
        required: true,
      },
      facility_name: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      phone_number: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip_code: {
        type: Number,
        required: true,
      },
      county_name: {
        type: String,
        required: true,
      },
      hospital_overall_rating: {
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

  const Hospital = model("Hospital", hospitalSchema);

  module.exports = Hospital;