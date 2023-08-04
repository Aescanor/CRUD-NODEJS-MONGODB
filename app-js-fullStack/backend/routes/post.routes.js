const express = require('express'); // import express
const { setPosts, getPosts, updatePost, deletePost } = require('../controllers/post.controller');
const router = express.Router(); // create router

// Read :
router.get("/", getPosts); // route for GET request to root of server")
// Create :
router.post("/", setPosts ); // route for GET request to root of server")
// Update : 
router.put("/:id", updatePost); // route for GET request to root of server")
// Delete : 
router.delete("/:id", deletePost); // route for GET request to root of server"

// Partial update :  
router.patch("/like-post/:id", (req, res) => { // route for GET request to root of server") })
res.json({message: "Post liké id : " + req.params.id}); // send json object as <response></response>
})

// Partial update :  
router.patch("/dislike-post/:id", (req, res) => { // route for GET request to root of server") })
res.json({message: "Post disliké id : " + req.params.id}); // send json object as <response></response>
})
module.exports = router; // export router so it can be used by other parts of the application
