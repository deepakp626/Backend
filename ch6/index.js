import * as fs from "fs/promises"


// creating directory - path should be there

// try {
//   await fs.mkdir('/home/deepak/Desktop/BackEnd/ch6/test/demo',{recursive:true});
//   console.log("directory creted")
// } catch (error) {
//   console.log(error)
// }



// cread content of directory

// try {
//   const files = await fs.readdir('/home/deepak/Desktop/BackEnd/ch6/test');
//   for(const file of files)
//       console.log(file)
// } catch (error) {
//       console.log(error)
// }


// remove directory - directory should be empty

// try {
//   await  fs.rmdir('/home/deepak/Desktop/BackEnd/ch6/test/demo')
//   console.log("directory empty")
// } catch (error) {
//       console.log(error)
// }


// create and write file 

// try {
//   await  fs.writeFile("readme.txt",'hello node js');
//   console.log("created filr")
// } catch (error) {
//       console.log(error)
// }


// read file

// try {
//   const data =  await  fs.readFile("readme.txt");
//   console.log({data})
// } catch (error) {
//       console.log(error)
// }

// try {
//   const data =  await  fs.readFile("readme.txt",'utf-8');
//   console.log({data})
// } catch (error) {
//       console.log(error)
// }


// // append data into file
// try {
//   await  fs.appendFile("readme.txt",' hello coders');
//   console.log("append success")
// } catch (error) {
//       console.log(error)
// }


//  copy file 
// try {
//   await  fs.copyFile("readme.txt",'info.txt');
//   console.log("copy success")
// } catch (error) {
//       console.log(error)
// }


// Get File information
try {
const stats =  await  fs.stat("/home/deepak/Desktop/BackEnd/ch6/test/emp.js");
  console.log(stats.isDirectory())
  console.log(stats.isFile())
  console.log(stats)
} catch (error) {
      console.log(error)
}