const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");
const models = require("./app/models");
// db.sequelize.sync();
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
// to get json data
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// simple test txt
app.get("/", (req, res) => {
  console.log('TEXT in console when working');
//  res.json({ message: "Welcome to Max' App" });
    res.send('Hello to max App');
});

app.post("/testdb", async(req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(err.message);
  }
})
// set port, listen for requests on 8080, not 3000 like my standard!
require("./app/routes/test.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// seed with 'id', 'Telefonnummer' and 'Wunschzeiten' (also includes 'created at' and 'updated at')
const createTestWithAnfrage = async() => {
  await models.tests.create(
  {
    id: '1',
    Telefonnummer: '0176321123',
    Wunschzeiten: '08:00 - 10:00',
  }
    );
};