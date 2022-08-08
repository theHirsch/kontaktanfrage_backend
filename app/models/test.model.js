module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
      Telefonnummer: {
        type: Sequelize.STRING
      },
      Wunschzeiten: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Test;
  };