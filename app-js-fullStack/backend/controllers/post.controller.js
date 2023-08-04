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
    try {
      const post = await postModel.findById(req.params.id); // get post by id
  
      if (!post) {
        return res.status(404).json({ message: "Post non trouvé" }); // send error message
      }
  
      // Update post properties based on the request data
      if (req.body.message) {
        post.message = req.body.message;
      }
  
      if (req.body.author) {
        post.author = req.body.author;
      }
  
      // Save the changes to the database
      await post.save();
  
      res.status(200).json({ message: "Post mis à jour avec succès" }); // Send success message
    } catch (error) {
      console.error("Error updating post:", error);
      res.status(500).json({ message: "Erreur lors de la mise à jour du post" }); // Send error message
    }
  };