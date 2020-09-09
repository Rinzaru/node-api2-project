const express = require("express");
const posts = require("../data/db");
const router = express.Router();

/********* GET REQUESTS ********/

router.get("/", (req, res) => {
  posts
    .find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Error Collecting Users" });
    });
});

router.get("/:id", (req, res) => {
  posts
    .findById(req.params.id)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch(() => res.status(500).json({ error: "Error Loading Post" }));
});

router.get("/:id/comments", (req, res) => {
  posts
    .findPostComments(req.params.id)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch(() => {
      res.status(500).json({ error: "Error Loading Post" });
    });
});

/********* POST REQUESTS ********/

router.post("/", (req, res) => {
  posts
    .insert(req.body)
    .then((post) => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({ Error: "Error Adding Post" });
    });
});

router.post("/:id/comments", (req, res) => {
  posts
    .insertComment(req.body)
    .then((comment) => {
      res.status(200).json(comment);
    })
    .catch(() => {
      res.status(500).json({ Error: "Error Adding Comment" });
    });
});

/********* PUT REQUESTS ********/

router.put("/:id", (req, res) => {
  const changes = req.body;
  posts
    .update(req.params.id, changes)
    .then((post) => {
      if (post) {
        res.status(200).json(post);
      } else {
        res.status(404).json({ message: "This post does not exist" });
      }
    })
    .catch(() => {
      res.status(500).json({ Error: "Error Updating Post" });
    });
});

/********* DELETE REQUESTS ********/
router.delete("/:id", (req, res) => {
  posts
    .remove(req.params.id)
    .then((post) => {
      if (post) {
        res.status(200).json({ message: "This post has been deleted" });
      } else {
        res.status(404).json({ message: "Post Not Found" });
      }
    })
    .catch(() => {
      res.status(500).json({ error: "The Post Could Not Be Removed" });
    });
});

//common JS which is an older way of doing modules like Reacts Import/Export
module.exports = router;
