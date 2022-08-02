module.exports = app => {
    const Tests = require("../controllers/test.controller.js");
    var router = require("express").Router();
    // Create a new Test
    router.post("/", Tests.create);
    // Retrieve all Tests
    router.get("/", Tests.findAll);
    // Retrieve all published Tests
    router.get("/published", Tests.findAllPublished);
    // Retrieve a single Test with id
    router.get("/:id", Tests.findOne);
    // Update a Test with id
    router.put("/:id", Tests.update);
    // Delete a Test with id
    router.delete("/:id", Tests.delete);
    // Create a new Test
    router.delete("/", Tests.deleteAll);
    app.use('/api/Tests', router);
  };