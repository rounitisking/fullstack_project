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
// environment variable kohamesha ek variable mai likho for a good practise as ports are assigned by the servers so we don't know which port we will be getting in production
//cors - [cors only work when the frontend and the backend work on the different origin] cross origin resourse sharing - it means it it is a fucntion by which a froniteend and a backend can share resources as they are on a seperated servers (BASICALLY WE ARE WRITING CORS ON THE BACKEND TO TELL THE BROWSER WHICH REQUEST TO ALLOW AND WHICH NOT )
// origin - in cors the origin means that we are accepting request from which (protocol + domain + port)
//methods - in cors methods tell which request to accept by the frontend
//headers 
//app.use() is used to runn the middleware fucntions means fuctions in the middle of the req and the res 
//express.json is used for tell the frontent that we are excepting json 
//express.urlencoded - it is use to accept the data from the url
//backend talk with database which i smongodb but our backend don't directly talk with the database it use mongoose (package), so backend talk with mongoose then mongoose talk with mongodb
// mongodb has cluster - a cluster is a group of databases and insidde cluster we define users which have the access of the database in different ways and every user has a username and password so to connect the user with the database the database ask for the user and pwd
//to connect the servers with the database we need the url of the database then username and password and if our device ip is registered on network access of the database (ip_whitelisting)
// there are two ways to export a file - named export in which we export multiple values from the same file and at the time of import we have to import from the same name and default export - in which we can export only one value from one file and in this when we have to import we can import form any name 
// named export - export fuction greet(){}              way to import  - import {greet, a } from file_name(./)
//                export let a = 10
//default export - export default export fuction greet(){}      way to import - import greeting from file_name(./)
//when we are importing a file we have to write .jsetensio in the file path 

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectDatabase from "./utils/db.js";
dotenv.config()
const app = express();
app.use(cors({
    origin : process.env.BASE_URL,
    methods : ["GET" , "POST" , "PUT" , "DELETE"],
    allowedHeaders : ["Content-Type" , "Authorization"],
    credentials : true
}))
app.use(express.json)
app.use(express.urlencoded({extended : true}))
const port = process.env.PORT || 4000;  // common ports which can be used except 3000 are  4000,5000, 5173

// here are accepting an request from the client
app.get("/rounit" , (req, res)=>{ 
    res.send("rounit singh is welcoming you!")
    
})


ConnectDatabase()
app.listen(port , ()=>{
    console.log(`yes i m listening on port ${port} - this message is from server`)
})



// read about - app.use , headers and the cors 