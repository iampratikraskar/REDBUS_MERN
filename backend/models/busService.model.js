const mongoose = require("mongoose");
const busSchema = new mongoose.Schema({
    vehicle: String,
    available: Boolean,
    source: String,
    seater: Number,
    music: Boolean,
    charging: Boolean,
    pricekm: Number,
    img: String,
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Customers",
    },
});

module.exports = mongoose.model("BusService", busSchema);