const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    postImg: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
    },
    created_by: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    timestamps: true,
  }
);

postSchema.virtual("likeCount").get(function () {
  return this.likes.length;
});

const Post = model("Post", postSchema);

module.exports = Post;
