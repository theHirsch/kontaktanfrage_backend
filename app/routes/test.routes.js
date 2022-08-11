module.exports = app => {

    const tests = require("../controllers/test.controller.js");
    var router = require("express").Router();
    // Create a new Test
    router.post("/", tests.create);
    // Retrieve all tests
    router.get("/", tests.findAll);
    // Retrieve all published tests
    router.get("/published", tests.findAllPublished);
    // Retrieve a single Test with id
    router.get("/:id", tests.findOne);
    // Update a Test with id
    router.put("/:id", tests.update);
    // Delete a Test with id
    router.delete("/delete/:id", tests.delete);
    // Create a new Test
    router.delete("/delete-all", tests.deleteAll);
    app.use('/api/tests', router);

    router.get("/admin",  );
  };