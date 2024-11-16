const express = require("express");
const router = express.Router();
const ContactModel = require("../models/contactModel");

router.get("/contacts", (req, res) => {
  ContactModel.getAll((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.status(200).json(rows);
  });
});

router.post("/contacts", (req, res) => {
  ContactModel.add(req.body, (err) => {
    if (err) return res.status(400).send(err.message);
    res.status(201).send("Contact added successfully.");
  });
});

router.put("/contacts/:id", (req, res) => {
  ContactModel.update(req.params.id, req.body, (err) => {
    if (err) return res.status(400).send(err.message);
    res.send("Contact updated successfully.");
  });
});

router.delete("/contacts/:id", (req, res) => {
  ContactModel.delete(req.params.id, (err) => {
    if (err) return res.status(400).send(err.message);
    res.send("Contact deleted successfully.");
  });
});

module.exports = router;
