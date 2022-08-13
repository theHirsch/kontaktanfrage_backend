const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const models = require("./app/models");

// Sequelize is always dropping and creating a new, fresh database when the backend is started again
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    if (true) {
      createTestWithAnfrage();
    }
  });
var corsOptions = {
  origin: true, credentials: true
};
app.use(cors(corsOptions));

// Enable getting json data
app.use(express.json());

// Parse requests of content-type, we are using json
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Test txt output in console and 'Willkommen zu Max App / Welcome to max App' on localhost:8080
app.get("/", (req, res) => {
  console.log('TEXT in console when working');
    res.send('Willkommen zu Max App / Welcome to max App');
});

// The created Database is called "testdb"
app.post("/testdb", async(req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(err.message);
  }
})
// Set port, listen for requests on 8080
require("./app/routes/test.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// Seed with 'id', 'Telefonnummer' and 'Wunschzeiten' (also includes 'created at' and 'updated at' automatically) to see if the db is working properly
const createTestWithAnfrage = async() => {
  await models.tests.create(
  {
    id: '1',
    Telefonnummer: '0176321123',
    Wunschzeiten: 'Mo08:00-10:00',
  }
    );
};