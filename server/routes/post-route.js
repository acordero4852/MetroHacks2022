const router = require("express").Router();
const { Post } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    attributes: ["id", "title", "description", "created_at"],
  })
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render("homepage", {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
