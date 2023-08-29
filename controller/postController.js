const postModel = require("../models/postModel")
const homePage=(req , res)=>{
    postModel.find()
    .sort({created_at :"-1"})
    .then(data =>{
        res.render("index",{
            posts:data
        })
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })
}

const createNewPostPage = (req,res)=>{
    res.render("new-post" ,{
        err:""
    })
}


const submitNewPost =(req , res)=>{
    if(req.body.title ==="" || req.body.desc===""){
        res.render("new-post",{
            err:"All fields are required"
        })
    }else {
        let newPost= new postModel(req.body)
        newPost.save()
        .then(()=>{
            res.redirect("/")
        })
        .catch(err=>{
            console.log(err);
        })
        console.log(newPost);
    }

}
module.exports={
    homePage,
    createNewPostPage,
    submitNewPost
}