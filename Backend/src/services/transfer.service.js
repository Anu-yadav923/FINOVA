const createTransfer = (transferData) => {
    console.log(transferData);

    return {
        message : "proceeded successfully!",
        transfer : transferData

    };
}

module.exports = {
    createTransfer
};