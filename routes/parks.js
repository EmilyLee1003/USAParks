const router = require("express").Router();
const parksController = require("../controllers/parksControllers");

router.route("/")
.get(parksController.findAll)
.post(parksController.create);

router
.route("/:parkCode")
// .get(parksController.findById)
// .put(parksController.update)
.delete(parksController.remove);

module.exports =router; 