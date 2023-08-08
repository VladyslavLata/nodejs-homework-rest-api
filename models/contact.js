const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { handleMongoosError } = require("../utils");

// для прикладів нижче
// const genreList = ["fantastic", "love"];
// const dateFormat = /^\d{2}-d{2}-d{4}/; // регулярний вираз як приклад, він не правильний для дати.

const contactSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String, // для збереження номера телефона в потрібному форматі потрібен регулярний вираз
      require: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    // -------ПРИКЛАДИ ВАЛІДАЦІЇ----------
    // genre: {
    //   type: String,
    //   enum: genreList,
    //   require: true,
    // },
    // date: {
    //   type: String,
    //   // 15-03-2008
    //   match: dateFormat,
    // },
  },
  { versionKey: false, timestamps: true }
);

contactSchema.post("save", handleMongoosError);

const Contact = model("contact", contactSchema);

const addSchemeContacts = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
  // ------ПРИКЛАДИ ВАЛІДАЦІЇ------
  // genre: Joi.string(),
  //   .validate(...genreList)
  //   .require(),
  // date: Joi.string().pattern(dateFormat).required(),
});

const addSchemeFavorite = Joi.object({
  favorite: Joi.boolean().required(),
});

const schemas = { addSchemeContacts, addSchemeFavorite };

module.exports = {
  Contact,
  schemas,
};
