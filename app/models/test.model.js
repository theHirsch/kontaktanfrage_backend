// Models are the "How should the db table with the columns look like" and here we are determine how the columns of the Test-table will look like for Sequelize
// We only need "Telefonnummer", "Wunschzeiten" and "CreatedAt" for our frontend, so we just have these determined Strings in here. 
// (CreatedAt will be automatically put from the database when data is posted)

module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
      Telefonnummer: {
        type: Sequelize.STRING
      },
      Wunschzeiten: {
        type: Sequelize.STRING
      }
    });
    return Test;
  };