const path = require("path");
const router = require ("express").Router();

    
    router.get("/", function(req, res){
        res.sendFile(path.join(__dirname, "/client/index"))
    });

module.exports = router;
