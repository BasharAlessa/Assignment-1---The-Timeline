
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://EssaNode:EssaNodePassword@cluster0.quzkya1.mongodb.net/?retryWrites=true&w=majority")
.then (()=>{
    console.log("DB is ---ON");
})
.catch((err)=>{
    console.log(err);
})