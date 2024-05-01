const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dataSchema = new Schema({
    image: {type: String, required: false},
    name: {type: String, required: true},
    gender: {type: String, required: true},
    nationality: {type: String, required: true},
    city: {type: String, required: true},
    age: {type: String, required: true},
    price: {type: String, required: true},
    mobile: {type: String, required: true},
    status: {type: Number, required: true},
    notes: {type: String, required: false},
    creationDate: {type: Date, default: Date.now},
})

module.exports = mongoose.model("Data", dataSchema)
