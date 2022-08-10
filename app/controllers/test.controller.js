const db = require("../models");
const Test = db.tests;
const Op = db.Sequelize.Op;
// Create and Save a new Test
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Telefonnummer) {
      res.status(400).send({
        message: "Content can not be empty, enter a Telefonnummer!"
      });
      return;
    }
    // Create a Test
    const test = {
      Telefonnummer: req.body.Telefonnummer,
      Wunschzeiten: req.body.Wunschzeiten,
      published: req.body.published ? req.body.published : false
    };
    // Save Test in the database
    Test.create(test)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Test."
        });
      });
  };
// Retrieve all Tests from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
    Test.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tests."
        });
      });
  };
// Find a single Test with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Test.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Test with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Test with id=" + id
        });
      });
  };
// Update a Test by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Test.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Test was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Test with id=${id}. Maybe Test was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Test with id=" + id
        });
      });
  };
// Delete a Test with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Test.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Test was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Test with id=${id}. Maybe Test was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Test with id=" + id
        });
      });
  };
// Delete all Tests from the database.
exports.deleteAll = (req, res) => {
    Test.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tests were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tests."
        });
      });
  };
// Find all published Tests
exports.findAllPublished = (req, res) => {
    Test.findAll({ where: { published: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tests."
        });
      });
  };