const {z, toLowerCase} = require("zod");

const createUserSchema = z.object({
    name : z.string().min(2, "Name Must Contain atleast 2 characters"),
    email : z.string().trim().email("Invalid Email Address").transform((email) => email.toLowerCase()),
    password : z.string().min(8, "Password Must Contain atleast 8 characters")
});

const loginUserSchema = z.object({
    email : z.string().trim().email("Invalid Email Address").transform((email) => email.toLowerCase()),
    password : z.string().min(1, "Password Must Contain atleast 1 character")
});

module.exports = {
    createUserSchema,
    loginUserSchema
};