const db = require("../db/database");

const ContactModel = {
  getAll: (callback) => db.all("SELECT * FROM contacts", callback),
  add: (contact, callback) => {
    const { firstName, lastName, email, phone, company, jobTitle } = contact;
    db.run(
      `INSERT INTO contacts (firstName, lastName, email, phone, company, jobTitle) VALUES (?, ?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone, company, jobTitle],
      callback
    );
  },
  update: (id, contact, callback) => {
    const { firstName, lastName, email, phone, company, jobTitle } = contact;
    db.run(
      `UPDATE contacts SET firstName = ?, lastName = ?, email = ?, phone = ?, company = ?, jobTitle = ? WHERE id = ?`,
      [firstName, lastName, email, phone, company, jobTitle, id],
      callback
    );
  },
  delete: (id, callback) =>
    db.run(`DELETE FROM contacts WHERE id = ?`, id, callback),
};

module.exports = ContactModel;
