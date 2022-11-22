const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts GET and POST
router.route("/").get(getThought).post(createThought);

// /api/thoughts/:thoughtID GET one user, PUT and DELETE by ID
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtID/reactions POST new reaction
router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:thoughtID/reactions DELETE reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
