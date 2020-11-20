module.exports = app => {
  const experts = require("../controllers/expert.controller");

  // Create a new Expert
  app.post("/experts", experts.create);

  // Retrieve all experts
  app.get("/experts", experts.findAll);

  // Retrieve a single Expert with expertId
  app.get("/experts/:expertId", experts.findById);

  // Update a Expert with expertId
  app.put("/experts/:expertId", experts.update);

};
