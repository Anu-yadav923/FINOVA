/* manual validaton ----> Zod

const transferValidation = (req, res, next) =>{
    const {amount, recieverId} = req.body;

    if(amount === undefined){
        return res.status(400).json({
            "status" : "error",
            "message" : "Amount is Required!"
        });
    }

    if(typeof amount !== "number"){
        return res.status(400).json({
            "status" : "error",
            "message" : "Amount must be a Number!"
        });
    }

    if(amount <= 0){
        return res.status(400).json({
            "status" : "error",
            "message" : "Amount must be greater than Zero!"
        });
    }

    if(!recieverId){
        return res.status(400).json({
            "status" : "error",
            "message" : "RecieverId is required!"
        });
    }

    if(typeof recieverId !== "string"){
        return res.status(400).json({
            "status" : "error",
            "message": "RecieverId must be a string!"
        });
    }

    next();
}

module.exports = transferValidation; */


const validate = (schema) =>{
    return (req, res, next) =>{
        const result = schema.safeParse(req.body);

        if(!result.success){
            res.status(400).json({
                status: false,
                message: "Invalid data",
                error: result.error.issues
            });

        }
        req.body = result.data;
        next();
    }
}

module.exports = validate;