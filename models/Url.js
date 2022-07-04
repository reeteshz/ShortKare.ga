const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    longUrl: String,
    shortCode: String,
    date: {
        type: String,
        Default: Date.now
    }
});

module.exports = mongoose.model('Url', urlSchema)