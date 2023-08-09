const express=require("express");
const app=express();
const dotenv=require("dotenv");

dotenv.config(
    {
        path:".env"
    }
);
const PORT=process.env.PORT || 3000;
app.get("/",(req,res)=>{
    res.send(`Server is running at Port ${PORT} 🚀`)
})
app.listen(PORT,()=>{
    console.log(`Server is running at Port ${PORT} 🚀`)
})
