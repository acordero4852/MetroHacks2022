const { Hospital } = require("../models");

const hospitalData = [
    {
        hospitalName: "Test1",
        phoneNumer: "(940) 777 1234",
        address: "1234 Main St",
        ZIP: "75033"

    },
];

const seedHospital = async () => {
    await Hospital.deleteMany({});
    await Hospital.insertMany(hospitalData);
};

module.exports = seedHospital;