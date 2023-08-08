const { Contact } = require("../models/contact");

const { HttpError, controllerWrapper } = require("../utils");

// try / catch    винесли з кожної функції у функцію декоратор controllerWrapper

const getAllContacts = async (req, res, next) => {
  const result = await Contact.find();
  // const result = await Contact.find({}, "name phone") - поверне всі об'єкти тільки з полями name і phone
  // const result = await Contact.find({}, "-phone") - поверне всі об'єкти без поля phone
  // const result = await Contact.find({name: "Allen Raymond"}) - поверне об'єкт з полем name - Allen Raymond
  res.json(result);
};

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const addNewContact = async (req, res, next) => {
  // const { error } = addScheme.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // } - цю перевірку винесли в middleware.
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res, next) => {
  // const { error } = addScheme.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // } - цю перевірку винесли в middleware.
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  }); // new: true потрібен щоб метод findByIdAndUpdate повертав оновлений об'єкт
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
  // якщо треба повернути статус 204 , то в такому випадку тіло відповіді не повертається.
  // з 204 статусом тіло відповіді просто не відправиться.
  //  можна написати таке: res.status(204).send();
};

module.exports = {
  getAllContacts: controllerWrapper(getAllContacts),
  getOneContactById: controllerWrapper(getOneContactById),
  addNewContact: controllerWrapper(addNewContact),
  updateContactById: controllerWrapper(updateContactById),
  removeContactById: controllerWrapper(removeContactById),
};
