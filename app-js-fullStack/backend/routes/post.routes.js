const express = require('express'); // import express
const router = express.Router(); // create router

// Read :
router.get("/", (req, res) => { // route for GET request to root of server
    res.json({ message: 'Hello World!' }); // send json object as response
})

// Create :
router.post("/", (req, res) => { // route for GET request to root of server
    console.log(req.body); // log request body to console
    res.json({ message : req.body.message}); // send json object as response
})
// Update : 
router.put("/:id", (req, res) => { // route for GET request to root of server")
res.json({messageId: req.params.id}); // send json object as response
})
// Delete : 
router.delete("/:id", (req, res) => { // route for GET request to root of server") })
res.json({message: "Post supprimé id : " + req.params.id}); // send json object as response
})

// Partial update :  
router.patch("/like-post/:id", (req, res) => { // route for GET request to root of server") })
res.json({message: "Post liké id : " + req.params.id}); // send json object as <response></response>
})

// Partial update :  
router.patch("/dislike-post/:id", (req, res) => { // route for GET request to root of server") })
res.json({message: "Post disliké id : " + req.params.id}); // send json object as <response></response>
})
module.exports = router; // export router so it can be used by other parts of the application
