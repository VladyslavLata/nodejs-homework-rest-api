const handleMongoosError = (error, data, next) => {
  const { code, name } = error;
  const statusCode = code === 11000 && name === "MongoServerError" ? 409 : 400;
  error.status = statusCode;
  next();
};

module.exports = handleMongoosError;
