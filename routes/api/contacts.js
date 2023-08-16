const express = require("express");

const {
  getAllContacts,
  getOneContactById,
  addNewContact,
  removeContactById,
  updateContactById,
} = require("../../controllers/contacts");
const { schemas } = require("../../models/contact");
const { authenticate, validateBody, isValidid } = require("../../middleware");

const router = express.Router();

router.get("/", authenticate, getAllContacts);

router.get("/:contactId", authenticate, isValidid, getOneContactById);

router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchemeContacts),
  addNewContact
);

router.put(
  "/:contactId",
  authenticate,
  isValidid,
  validateBody(schemas.addSchemeContacts),
  updateContactById
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidid,
  validateBody(schemas.addSchemeFavorite),
  updateContactById
);

router.delete("/:contactId", authenticate, isValidid, removeContactById);

module.exports = router;
