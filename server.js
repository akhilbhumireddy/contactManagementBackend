const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactsRoutes = require("./routes/contacts");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", contactsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
