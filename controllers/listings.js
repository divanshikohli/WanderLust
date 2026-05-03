const Listing = require("../models/listing.js");
const axios = require("axios");


module.exports.index = async (req, res) => {
    let { search, category } = req.query;
    let query = {};

    if (search) {
        query.$or = [
            { title: { $regex: search, $options: "i" } },
            { location: { $regex: search, $options: "i" } },
            { country: { $regex: search, $options: "i" } },
            { category: { $regex: search, $options: "i" } }
        ];
    }

    if (category) {
        query.category = category;
    }

    const allListings = await Listing.find(query).lean();

    res.render("listings/index.ejs", {
        allListings,
        search,
        category
    });
};


module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
};


module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).lean()
        .populate({
            path: "reviews",
            populate: {
                path: "author",
            },
        })
        .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
};


module.exports.createListing = async (req, res) => {
    const newListing = new Listing(req.body.listing);
    if (req.file) {
        newListing.image.url = req.file.path;
        newListing.image.filename = req.file.filename;
    }

    const locationText = req.body.listing.location;

    const geoResponse = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: locationText,
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
        newListing.geometry = {
            type: "Point",
            coordinates: [
                parseFloat(result.lon),
                parseFloat(result.lat)
            ]
        };
    }

    newListing.owner = req.user._id;

    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing you requested does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250,h_250,c_fill");
    res.render("listings/edit.ejs", { listing, originalImageUrl });
};


module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing not found!");
        return res.redirect("/listings");
    }

    listing.title = req.body.listing.title;
    listing.description = req.body.listing.description;
    listing.price = req.body.listing.price;
    listing.location = req.body.listing.location;
    listing.country = req.body.listing.country;
    listing.category = req.body.listing.category;

    if (req.file) {
        listing.image.url = req.file.path;
        listing.image.filename = req.file.filename;
    }

    const locationText = req.body.listing.location;

    const geoResponse = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
            params: {
                q: locationText,
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
    }
    await listing.save();
    req.flash("success", "Listing Updated!");
    return res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    return res.redirect("/listings");
};
