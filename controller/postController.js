const postModel = require("../models/postModel")
const commentModel = require("../models/commentModel")
const homePage=(req , res)=>{
    postModel.find()
    .populate("comments" , "_id comment")
    .sort({created_at :-1})
    .then(data =>{
        // console.log(data[1]);
        res.render("index",{
            posts:data
        })
    })
    .catch(err =>{
        console.log(err);
    })
    commentModel.find()
    .populate("post_id")
    .then(data =>{
        // console.log(data);
    })
    .catch(err=>{
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
        // console.log(newPost);
    }

}


const deletePost =(req , res )=>{
    // console.log(req.params.id)
    postModel.findByIdAndDelete(req.params.id)
        .then(()=>{
            res.redirect("/")

        })
        .catch (err =>{
            console.log(err);
        })
}

const openEditPage = (req ,res)=>{
    let postId =req.params.id;
    postModel.findById(postId)
        .then(postInfo =>{
            res.render("edit-post" , {
                info:postInfo
            })
        })
        .catch(err=>{
            console.log(err);
        })
}

const submitEditPost =(req, res)=>{

            if(req.body.title === "" || req.body.desc==="") {
                res.render ("edit-post" ,{
                    info :"",
                    err:"both inputs are required",
                    info:postInfo
                })
            } else {
                postModel.findByIdAndUpdate(req.params.id , req.body)
                    .then(()=>{
                        res.redirect("/")
                    })
                    .catch(err =>{
                        console.log(err);
                    })
            }
}

module.exports={
    homePage,
    createNewPostPage,
    submitNewPost,
    deletePost,
    openEditPage,
    submitEditPost
}