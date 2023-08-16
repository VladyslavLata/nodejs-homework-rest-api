const express = require("express");

const { schemas } = require("../../models/user");
const { validateBody, authenticate } = require("../../middleware");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");

const router = express.Router();

router.post("/register", validateBody(schemas.registerSchema), register);

router.post("/login", validateBody(schemas.loginSchema), login);

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

module.exports = router;
