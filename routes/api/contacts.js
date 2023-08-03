const express = require("express");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  removeContactById,
  updateContactById,
} = require("../../controllers/contacts");
const schemeContacts = require("../../schemas/contacts");
const { validateBody } = require("../../middleware");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", getOneContactById);

router.post("/", validateBody(schemeContacts), addNewContact);

router.put("/:contactId", validateBody(schemeContacts), updateContactById);

router.delete("/:contactId", removeContactById);

module.exports = router;
