/**
 * @file server.js
 * Express server setup and configuration. 
 */
const express = require("express");
const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = require("./app/models");
database.sequelize.sync().then(() => {
    console.log("Database has been connected.");
  }
);

require("./app/routes/availabilityRoute")(app);
require("./app/routes/competenceRoute")(app);
require("./app/routes/competence_profileRoute")(app);
require("./app/routes/personRoute")(app);
require("./app/routes/roleRoute")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  }
);
