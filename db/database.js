const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./contacts.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS contacts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstName TEXT NOT NULL,
        lastName TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT NOT NULL,
        company TEXT,
        jobTitle TEXT
    )`);
});

module.exports = db;
