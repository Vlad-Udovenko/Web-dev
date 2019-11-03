const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listScheme = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    surName: String,
    tel: String,
});

const List = mongoose.model('List', listScheme);

module.exports = List;