const express = require('express'); // import express
const { setPosts, getPosts, updatePost, deletePost, likePost, dislikePost } = require('../controllers/post.controller');
const router = express.Router(); // create router

// Read :
router.get("/", getPosts); // route for GET request to root of server")
// Create :
router.post("/", setPosts ); // route for GET request to root of server")
// Update : 
router.put("/:id", updatePost); // route for GET request to root of server")
// Delete : 
router.delete("/:id", deletePost); // route for GET request to root of server"

// Like post :  
router.patch("/like-post/:id", likePost); // route for GET request to root of server"

// Partial update :  
router.patch("/dislike-post/:id", dislikePost); // route for GET request to root of server"
module.exports = router; // export router so it can be used by other parts of the application
