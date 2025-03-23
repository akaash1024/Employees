

const isValidate = (schema) => async (req, res, next) => {
    try {
        
        const parseBody = await schema.parseAsync(req.body);

        req.body = parseBody;
        next()
    } catch (error) {
        console.log(`Is error from here, AKash`);
        
        next(error)
    }
}

module.exports = isValidate