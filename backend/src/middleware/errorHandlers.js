// not Found
const notFound = (req, res, next) => {
    const error = new Error(`Not Found: ${originalUrl}`)
    res.staus(404);
    next(error)
}

// Error Handler

const errorHandler = (err, req, res, next) => {
    const stauscode = res.statusCode == 200 ? 500 : res.statusCode;
    res.status(stauscode);
    res.json({
        message: err?.message,
        stack: err?.stack
    })
}

module.exports = {
    notFound,
    errorHandler,
}