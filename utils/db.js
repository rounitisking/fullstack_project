import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


function ConnectDatabase(){
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("connected to mongodb")
    })
    .catch((err)=>{
        console.log("error connecting to mongodb")
    })

}

export default ConnectDatabase;
