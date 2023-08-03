const contacts = require("../models/contacts");

const { HttpError, controllerWrapper } = require("../utils");

// try / catch    винесли з кожної функції у функцію декоратор controllerWrapper

const getAllContacts = async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getOneContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
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
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res, next) => {
  // const { error } = addScheme.validate(req.body);
  // if (error) {
  //   throw HttpError(400, error.message);
  // } - цю перевірку винесли в middleware.
  const { contactId } = req.params;
  const result = await contacts.updateContact(contactId, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const removeContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
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
  removeContactById: controllerWrapper(removeContactById),
  updateContactById: controllerWrapper(updateContactById),
};
