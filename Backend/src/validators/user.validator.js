const {z} = require("zod");

const createUserSchema = z.object({
    name : z.string().min(2, "Name Must Contain atleast 2 characters"),
    email : z.string().email("Invalid Email Address"),
    password : z.string().min(8, "Password Must Contain atleast 8 characters")
});

module.exports = {
    createUserSchema
};