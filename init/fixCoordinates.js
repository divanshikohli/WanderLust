const mongoose = require("mongoose");
const axios = require("axios");
const Listing = require("../models/listing");

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
    .then(() => console.log("DB Connected"))
    .catch(err => console.log(err));

async function fixCoordinates() {

    const listings = await Listing.find({});

    for (let listing of listings) {

        try {
            const geoResponse = await axios.get(
                "https://nominatim.openstreetmap.org/search",
                {
                    params: {
                        q: listing.location,
                        format: "json",
                        limit: 1
                    },
                    headers: {
                        "User-Agent": "wanderlust-app"
                    }
                }
            );

            const result = geoResponse.data[0];

            if (result) {
                listing.geometry = {
                    type: "Point",
                    coordinates: [
                        parseFloat(result.lon),
                        parseFloat(result.lat)
                    ]
                };

                await listing.save();

                console.log(`Updated: ${listing.title}`);
            }

        } catch (err) {
            console.log(`Failed: ${listing.title}`);
        }
    }

    mongoose.connection.close();
}

fixCoordinates();