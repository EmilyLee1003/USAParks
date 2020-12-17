const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//park schema 

const parkSchema = new Schema({
    parkCode:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }

})
const Parks = mongoose.model('Parks', parkSchema);
module.exports= Parks;

