const path = require("path");
require("dotenv").config({
    path: path.resolve(__dirname, "../.env")
});

const mongoose = require("mongoose");
const axios = require("axios");

const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    await mongoose.connect(dbUrl);
    console.log("connected to DB");
    await initDB();
}

main().catch(console.log);

async function getCoords(place) {
    const res = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: place,
                format: "json",
                limit: 1
            },
            headers: {
                "User-Agent": "wanderlust-app"
            }
        }
    );

    if (res.data.length > 0) {
        return [
            parseFloat(res.data[0].lon),
            parseFloat(res.data[0].lat)
        ];
    }

    return [77.2090, 28.6139];
}

async function initDB() {
    await Listing.deleteMany({});

    let data = [];

    for (let obj of initData.data) {
        const coords = await getCoords(obj.location);

        data.push({
            ...obj,
            owner: "69f21e3a4a46ee595fbbc8e9",
            geometry: {
                type: "Point",
                coordinates: coords
            }
        });
    }

    await Listing.insertMany(data);

    console.log("Data initialized with coordinates");
}