const router = require("express").Router();

const {
  getThought,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
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

// /api/thoughts/:thoughtid/reaction POST
router.route("/:thoughtId/reactions").post(createReaction);

// /api/:thoughtid/reaction/:reactionid DELETE
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;
