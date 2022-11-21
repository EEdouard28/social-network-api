const router = require("express").Router();

const {
  getUser,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users GET and POST
router.route("/").get(getUser);
// .post(createUser);

// /api/users/:userID GET one user, PUT and DELETE by userID
// router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userID/friends/:friendId POST and DELETE by friendId
// router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
