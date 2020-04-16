const fs=require('fs');
const genH=require('./generateHash.js');
var crypto = require('crypto');
const path1=fs.readdirSync('./utils');
// // 1
const result=fs.statSync('./utils/readme.md');
console.log('result:',result);
// //2
const result1=fs.statSync('./utils');
console.log('result:',result1.isDirectory());
// //3
// const result2=fs.statSync('');
// console.log('result:',result2);

// 4
const path=require('path');

async function print(pathDir) {
    const dir = await fs.promises.opendir(pathDir);
    for await (const dirent of dir) {

        if (dirent.isDirectory()) {
            //calling recursively to print all files inside directory
            console.log(' directory  ' + dirent.name);
            const newPath=path.join(pathDir,dirent.name.toString());
            print(newPath).catch(console.error);
        }
        else {
            console.log('dirctory :' + pathDir + '  file name :  ' + dirent.name);
            const newPath=path.join(pathDir,dirent.name.toString());
           //reading data of all the files
            fs.readFile(newPath, 'utf8', (err, data) => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log(data)
            })
            // writing and generating hash
            genH.createHash(newPath);
            

        }
    }
   

}
print('./utils').catch(console.error);