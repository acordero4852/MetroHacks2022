const { Hospital } = require("../models");

const hospitalData = [
    {
        hospitalName: "Test1",
        phoneNumber: "(940) 777 1234",
        address: "1234 Main St",
        ZIP: "75033"

    },
    {
        hospitalName: "Hospt2",
        phoneNumber: "(777) 777 1234",
        address: "555 Main St",
        ZIP: "75026"

    },
];

const seedHospital = async () => {
    await Hospital.deleteMany({});
    await Hospital.insertMany(hospitalData);
};

module.exports = seedHospital;