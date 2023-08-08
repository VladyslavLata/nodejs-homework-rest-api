const express = require("express");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  removeContactById,
  updateContactById,
} = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { validateBody, isValidid } = require("../../middleware");

const router = express.Router();

router.get("/", getAllContacts);

router.get("/:contactId", isValidid, getOneContactById);

router.post("/", validateBody(schemas.addSchemeContacts), addNewContact);

router.put(
  "/:contactId",
  isValidid,
  validateBody(schemas.addSchemeContacts),
  updateContactById
);

router.patch(
  "/:contactId/favorite",
  isValidid,
  validateBody(schemas.addSchemeFavorite),
  updateContactById
);

router.delete("/:contactId", isValidid, removeContactById);

module.exports = router;
