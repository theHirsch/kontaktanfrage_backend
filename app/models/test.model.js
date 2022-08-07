module.exports = (sequelize, Sequelize) => {
    const Test = sequelize.define("test", {
      telefonnummer: {
        type: Sequelize.STRING
      },
      wunschzeiten: {
        type: Sequelize.STRING
      },
    });
    return Test;
  };