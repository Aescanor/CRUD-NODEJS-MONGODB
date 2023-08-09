const express = require('express'); // import express
const { setPosts, getPosts, getPostById, updatePost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router = express.Router(); // create router

// Read :
router.get("/", getPosts); // route for GET request to root of server")
// Read detail by id:
router.get("/:id", getPostById); // route for GET request to root of server")
// Create :
router.post("/", setPosts ); // route for GET request to root of server")
// Update : 
router.put("/:id", updatePost); // route for GET request to root of server")
// Delete : 
router.delete("/:id", deletePost); // route for GET request to root of server"

// Partial update - Like post :
router.patch("/:id/like", likePost); // route pour la requête PATCH à la racine du serveur

// Partial update (dislike):
router.patch("/:id/dislike-post", dislikePost);

module.exports = router; // export router so it can be used by other parts of the application
