const express = require("express");
const router = express.Router();

const moviesControllers = require("../controllers/moviesControllers");

router.get("/", moviesControllers.getAll);
router.get("/:id", moviesControllers.getOne);
router.get("/:id/description", moviesControllers.getDescription);

module.exports = router;
