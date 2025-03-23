

const { z } = require("zod")


const loginSchema = z.object(
    {
        email: z
            .string({ required_error: "Email is required" })
            .trim()
            .email()
            .nonempty()
            .min(3, { message: "Email must be in 3 char" })
            .max(25, { message: "Emai not exceed to 25 char" })
    },
    {
        password: z
            .string({ required_error: "Password is required" })
            .trim()
            .nonempty()
            .min(4, { message: "Password must be in 4 chat" })
            .max(8, { message: "Password not exceed to 8 char" })

    }
)



const signupSchema = loginSchema.extend({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .nonempty()
        .min(4, { message: "Name must be in 4 char" })
        .max(8, { message: "Name not exceed to 8 char" })
})

module.exports = { loginSchema, signupSchema }