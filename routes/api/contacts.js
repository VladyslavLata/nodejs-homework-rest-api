const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json({ message: "template message 2" });
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message 23" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message 23" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message 23" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
