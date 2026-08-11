const getHealth = (req, res) =>{
    res.status(200).json({
        "status" : "success",
        "message" : "server is alive"
    });
}

module.exports = {
    getHealth
}