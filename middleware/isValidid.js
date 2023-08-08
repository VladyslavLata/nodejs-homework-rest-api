const { isValidObjectId } = require("mongoose");

const { HttpError } = require("../utils");

// перевіряємо чи передали валідне id, чи може це бути id.
const isValidid = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    next(HttpError(400, `${contactId} is not valid id`));
  }
  next();
};

module.exports = isValidid;
