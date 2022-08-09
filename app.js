// Import the sequelize object on which
// we have defined model.
const sequelize = require('./app/db/database.js')
var testAPIRouter = require("./routes/testAPI");

// Import the test model we have defined
//const test_model = require('./app/models/test.model')

// Sync all models that are not
// already in the database
sequelize.sync() 

// Force sync all models
// It will drop the table first 
// and re-create it afterwards
sequelize.sync({force:true}) 

app.use("/testAPI", testAPIRouter);