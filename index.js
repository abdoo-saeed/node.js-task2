
import path from 'path';
import fs from 'fs';
import {EventEmitter} from 'events'
import os from 'os';
const event = new EventEmitter();

// 1//////////////////////////////////////////////////////////
// function printPath(){

//     console.log("directory : ",__dirname);
//     console.log("file : ",__filename);

// }
// printPath();


// 2/////////////////////////////////////////////////////////
// function printFileNmae(){
//     console.log("file name : ",path.basename("/Users/johnDoe/Desktop/index.js"));

// }
// printFileNmae();


// 3///////////////////////////////////////////////////////////
// const obj ={

//     dir:"/folder",
//     name:"/app",
//     ext:".js"

// }
// function createPath(obj){

//     const fullPath =path.normalize (path.format(obj))
//     console.log("full path : ",fullPath);
// }
// createPath(obj);


// 4///////////////////////////////////////////////////////////
// function printEXT(pathInput){
//     console.log("file extension : ",path.extname(pathInput));
// }
// printEXT("index.html");


// 5///////////////////////////////////////////////////////////
// function printParse(pathInput){
//     const parsedPath = path.parse(pathInput);
//     log("name : ",parsedPath.name);
//     log("ext : ",parsedPath.ext);
// }
// printParse("/home/app/main.js");


// 6///////////////////////////////////////////////////////////
// function isAbsolute(pathInput){
//     console.log("is absolute : ",path.isAbsolute(pathInput));
// }
// isAbsolute("/user/local/bin");


// 7///////////////////////////////////////////////////////////
// function joinPath(dir,base,ext){
//     const joinedPath = path.join("dir","base","ext",);
//     console.log("joined path : ",joinedPath);
// }
// joinPath("src","index",".js");


// 8///////////////////////////////////////////////////////////
// function resolveToAbsolute(pathInput){
//     const absolutePath = path.resolve(pathInput);
//     console.log("absolute path : ",absolutePath);
// }
// resolveToAbsolute("index.js");



// 9///////////////////////////////////////////////////////////
// function Join2Paths(firstPath,secondPath){
//     const combinedPath = path.join(firstPath, secondPath);
//     console.log("combined path : ", combinedPath);

// }
// Join2Paths("/user/local","bin.jj");


// 10///////////////////////////////////////////////////////////
//  function deletion(pathInput){
//     const filePath = fs.unlink(pathInput,(err)=>{
//         if(err){
//             console.error("Error deleting file : ", err);
//             return;
//         }else{
//             console.log("File deleted successfully");
//         }
//     })
//  }
//  deletion("test.js");


// 11///////////////////////////////////////////////////////////
//  function createDir(dirPath){
//     fs.mkdir(dirPath,
//         {recursive:true},
//         (err)=>{
//             if(err){
//                 console.log("error in create the dir : ",err);
                
//             }else{
//                 console.log("directory created successfully");
//             }


//     })

// }
// createDir("TASK2/newDir");



// 12////////////////////////////////////////////////////////////
// event.on("start",(msg)=>{
//     console.log("Event started : ",msg);
// });
// event.emit("start","welcome event triggred");


// 13////////////////////////////////////////////////////////////
// event.on('login',(username)=>{
//     console.log("user logged in : ",username);
    

// })
// event.emit('login','abdosaeed');



// 14////////////////////////////////////////////////////////////
//  function readFile(pathInput){

//     fs.readFile(pathInput,'utf8',(err,data)=>{
//         if(err){
//             console.error("Error reading file : ",err);
            
//         }else{
//             console.log("File content : ",data);
//         }
//  })}
//  readFile("test.js");



// 15////////////////////////////////////////////////////////////
    // function writeFile(pathInput,content){
    //     fs.writeFile(pathInput,content,'utf8',(err)=>{
    //         if(err){
    //             console.error("Error writing file : ",err);
    //         }else{
    //             console.log("File written successfully");
    //         }
    //     }
    // )}
    // writeFile("output.js","console.log('Hello, this is a sample content.')");

    

// 16////////////////////////////////////////////////////////////
// function isExist(pathInput){
//     fs.access(pathInput,(err)=>{
//         if(err){
//             console.log("file does not exist");
//         }else{
//             console.log("file exists");
//         }
//     })
// }
// isExist("test.js");



// 17////////////////////////////////////////////////////////////
// function getSystemInfo() {
//   return {
//     platform: os.platform(),  
//     architecture: os.arch()   
//   };
// }

// console.log(getSystemInfo());