function logService (req, res, next) {
    console.log(req.body);
    return next();
}

export default logService