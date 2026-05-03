const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});


const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("connected to DB");
    await initDB();
}
main().catch((err) => {
    console.log(err);
});

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "69f21e3a4a46ee595fbbc8e9" }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}