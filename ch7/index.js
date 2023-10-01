import { error } from 'console';
import * as fs from 'fs';

// creating Directory- path should be there

// fs.mkdir("/home/deepak/Desktop/BackEnd/ch7/test/demo",(error) =>{
//   if(error) throw error;
//   console.log("Directory created ...")
// })


// // read content of directory
// fs.readdir("/home/deepak/Desktop/BackEnd/ch7/test",(error,files) =>{
//   if(error) throw error;
//   for(const file of files)
//       console.log(file)
// })


// remove directory - directory shouldbe be empty
// fs.rmdir("/home/deepak/Desktop/BackEnd/ch7/test/demo",(error) =>{
//   if(error) throw error;
//   console.log("directory removed")
// })


// // create and write directory
// fs.writeFile("readme.txt","Hello Node JS",(error) =>{
//   if(error) throw error;
//   console.log("filr created ...")
// })


// // Append data info file
// fs.appendFile("readme.txt"," Hello Node JS",(error) =>{
//   if(error) throw error;
//   console.log("Data append ...")
// })


// // copy file
// fs.copyFile("readme.txt","info.txt",(error) =>{
//   if(error) throw error;
//   console.log("Copy file ...")
// })


// Get  file info
// fs.stat("/home/deepak/Desktop/BackEnd/ch7",(error,stats) =>{
//   if(error) throw error;
//   console.log(stats.isDirectory())
//   console.log(stats.isFile())
//   console.log(stats)
// })