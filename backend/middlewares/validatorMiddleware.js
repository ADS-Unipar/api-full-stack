const validatorMiddleware = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body);
            next();
        } catch (error) {
            console.error(error);
            res.status(400).json(error.message);
        }
    };
}

module.exports = validatorMiddleware;