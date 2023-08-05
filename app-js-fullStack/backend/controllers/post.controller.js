const postModel = require('../models/post.model'); // import post model


// Read : 
module.exports.getPosts = async (req, res) => {  // get all posts
    const posts = await postModel.find(); // get all posts from database
    res.status(200).json(posts); // send posts as response
}

// Create :
module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
        // If message is not provided
        return res.status(400).json({ message: "Le message est obligatoire" }); // Send error message
    }

    const post = await postModel.create({
        // Create a new post
        message: req.body.message, // Set message from request
        author: req.body.author, // Set author from request
    });

    const response = {
        post: post, // Post data
        message: "Post créé", // Success message
    };

    res.status(201).json(response); // Send the combined response
};

// Update :
module.exports.updatePost = async (req, res) => {
    const post = await postModel.findById(req.params.id); // get post by id

    if (!post) {
        return res.status(404).json({ message: "Post non trouvé" }); // send error message
    }

    const updatedPost = await postModel.findByIdAndUpdate(

        post,
        req.body,
        { new: true }
    ); // update post in database

    res.status(200).json(updatedPost); // send updated post as response
}

// Delete post:
module.exports.deletePost = async (req, res) => {
    try {
        const post = await postModel.findById(req.params.id); // get post by id

        if (!post) {
            return res.status(404).json({ message: "Post non trouvé" }); // send error message
        }

        await postModel.deleteOne({ _id: post._id }); // delete the post from the database

        res.status(200).json({ message: "Post supprimé " + post._id }); // send success message
    } catch (error) { // catch error
        console.error("Error deleting post:", error); // log error to console
        res.status(500).json({ message: "Erreur lors de la suppression du post" }); // send error message
    }
};

// (Like post):
module.exports.likePost = async (req, res) => {
  try {
      const post = await postModel.findByIdAndUpdate(
          req.params.id,
          { $addToSet: { likers: req.body.userid } },
          { new: true }
      );

      res.status(200).json(post);
  } catch (error) {
      console.error("Error liking post:", error);
      res.status(500).json({ message: "Erreur lors du like du post" });
  }
};

// Partial update (dislike):
module.exports.dislikePost = async (req, res) => {
  try {
      const post = await postModel.findById(req.params.id); // get post by id

      if (!post) {
          return res.status(404).json({ message: "Post non trouvé" }); // send error message
      }

      await postModel.findByIdAndUpdate(
          req.params.id, // id of post to update
          { $pull: { likers: req.body.userid } }, // remove userid from likers array
          { new: true }
      ); // return updated post

      res.status(200).json({ message: "Post disliké id : " + req.params.id }); // send success message
  } catch (error) {
      console.error("Error disliking post:", error);
      res.status(500).json({ message: "Erreur lors du dislike du post" });
  }
};
