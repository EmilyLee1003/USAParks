const mongoose = require("mongoose");

const Schema = mongoose.Schema; 

const parksSchema = new Schema({
    name: {
        type : String,
        trim :true,
        required : "Enter the name of the park you want to add to your list"
    },
    date: {
        type: String,
        trim :true,
        required: "Enter the date you want wish to complete it by"
    },
    comments : {
        type: String, 
        trim : true,
        required: "Add any comments?"
    }
});

const nationalParks = mongoose.model("nationalParks", parksSchema);

module.exports = nationalParks; 