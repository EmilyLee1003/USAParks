let mongoose = require('mongoose');

//park schema 

let parkSchema = mongoose.Schema({
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

let Parks = module.exports= mongoose.model('Parks', parkSchema);