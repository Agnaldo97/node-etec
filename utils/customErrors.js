
module.exports.newError = (statusCode, message) => {
    let error = new Error(message);
    error.statusCode = statusCode;
    throw error;
}