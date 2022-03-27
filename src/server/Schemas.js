const mongoose = require('mongoose');

const DragonsForSaleSchema = new mongoose.Schema({
    morph:{
        type: String,
        required: true
    },
    birthday:{
        type: Date,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    sex:{
        type: String,
        required:true
    },
    indication:{
        type: String,
        required:true
    }
})

const DragonsForSale = mongoose.model('Dragons for sale', DragonsForSaleSchema);
module.exports = DragonsForSale;