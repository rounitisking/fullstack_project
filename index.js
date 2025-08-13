// kya karna hai or kab krna hai yahi hai foundation of backend
// to import codes from different files there are two ways require and import 
// if using require then we can use it directly but it is a outdated dated practise
// if using import then we have to add one line in the package.json file - "type" : "module"
// packag.json hamare project ka ek blueprint hota hai jo batata hai ki hamne kon konsi dependencies use kri hai hamare projec mai 
// agar ham kisi or project ki dependencies download krna cahte hai tho bas hame uske package.json ko apne folder mai rakh ke npm install ya npm i krna hai 
//express is a framework of the nodejs that help to build servers in a easier way
// in package.json mai express ki versioning likhi hui hai like ^5.1.0 yaha pe symbol before the version number ka matlab hota hai :
//  version ka jo syntax hota hai vo hota hai like major.minor.patch, ab the next question is ye major.minor.patch ye sab kya hai ?
// semantic versioning mai ye sab ye bata hai ki update type like the major digit tell ki uss software mai major update aya hai jo purane code ko break kr deta hai like changing the name of the api, minor ye batata hai ki uss software mai minor updates aaye hai like function ad kr diye pr isse purana code break nhi hota, then the lat patch ye bugs fixixes koo represent krta hai koi naya feature add nhi hota 
// ^ this in the version means caret or agar ye version mai laga hua hai tho iska matlab hai ki jo bhi minor and patch updates hoga uss software mai usko ye update kr dega 
// ~  this in the version means tilde or agar ye version mai hota hai tho ye only patch update krta hai 
//types of requests we are getting from the client are 
// get put post delete
//get request is the request in which we are asking for the data from the server
// post request is a type of request in which we are sending some data to the server
//put request is a type of request in which we are requesting from the server to update some data 
//delete is a type of request in which we are request the server to delete some data 
// http method are - app.get, post, put , delete 
//api endpoint is http method + route
// agar hamen apni env file kisi or folder mai ilkha hua hita hai tho ham uss file ka path dotenv.config mai daal skte hai 



import express from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express();
const port = process.env.PORT;  // common ports which can be used except 3000 are  4000,5000, 5173

// here are accepting an request from the client
app.get("/rounit" , (req, res)=>{ 
    res.send("rounit singh is welcomeing you!")
    
})


app.listen(port , ()=>{
    console.log(`yes i m listening on port ${port} - this message is from server`)
})



