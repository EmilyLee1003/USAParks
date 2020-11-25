const router = require("express").Router();
const nationalParks = require("../models/database.js");

router.post("/api/nationalParks",({body},res)=> {
    nationalParks.create(body)
    .then(dbnationalParks => {
        res.json(dbnationalParks);
    })
    .catch(err =>{
        res.status(400).json(err);
    });
});

router.get("/api/nationalParks",(req,res) =>{
    nationalParks.find({})
    .then(dbnationalParks => {
        res.json(dbnationalParks);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports =router;