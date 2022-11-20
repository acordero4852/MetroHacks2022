const { Doctor } = require("../models");

const doctorData = [
  {
    firstName: "Andrew",
    lastName: "Yu",
    practitioner: "Dermatologist",
    price: 50.0,
    rating: 1.5,
    hospitalID: 10001,
  },
  {
    firstName: "Test1",
    lastName: "Test2",
    practitioner: "Chiropractor",
    price: 60.0,
    rating: 2.5,
    hospitalID: 10023,
  },
];

const seedDoctor = async () => {
  await Doctor.deleteMany({});
  await Doctor.insertMany(doctorData);
};

module.exports = seedDoctor;
