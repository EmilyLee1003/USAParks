const router = require("express").Router();
const parkRoutes = require("./parks");

// Book routes
router.use("/parks", parkRoutes);
//wrapper 
module.exports = router;
