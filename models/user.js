const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "must use a valid email address",
      ],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    //property exist in json data but not in database
    //schema setting
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
// User model created
const User = model("User", userSchema);

//User model exported
module.exports = User;
