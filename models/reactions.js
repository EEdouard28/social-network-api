const { Schema, model, Types } = require("mongoose");
const date = require("../utils/date");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
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

//User model exported
module.exports = reactionSchema;
