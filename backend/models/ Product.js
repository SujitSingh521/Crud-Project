const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true },
    desc: {type: String, required: true },
    image: {type: String, required: true },
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Product', productSchema);
