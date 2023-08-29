const express = require("express")
const route= express.Router();
const postController=require("../controller/postController")




route.get("/" , postController.homePage)
route.get("/create-new-post" , postController.createNewPostPage)
route.post("/submit-new-post" , postController.submitNewPost)




module.exports= route;