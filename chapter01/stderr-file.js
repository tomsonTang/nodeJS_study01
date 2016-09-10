/**
 * ch01 stderr-file.js
 * 
 * node stderr-file.js 2> error.log
 */

var fs = require('fs');
var file = 'chapter01/not-found.txt';
var encoding = 'UTF-8';

fs.readFile(file,encoding,function (err,data) {
    if (err) {
        console.error("error - \n %s",err);
        console.warn("wran - \n %s",err);
    }
    else{
        console.log(data);
    }
})