const { Schema, model, Types } = require("mongoose");
const reactionSchema = require("./reactions");
const date = require("../utils/date");

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //   put getter here to format date
      get: (timestamp) => date(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [
      //reaction schema here
      reactionSchema,
    ],
  },
  {
    //property exist in json data but not in database
    //schema setting
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
// User model created
const Thought = model("Thought", thoughtSchema);

//User model exported
module.exports = Thought;
