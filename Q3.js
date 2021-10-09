var fs = require('fs');
var file = fs.readFileSync('data.txt','utf8').toString().replace(/"/g,'').split('\n')
var headers = (file.shift()).split(',');
let sum=0;
for(let i = 0; i < file.length; i++) {
    const contentCells = file[i].split(',');
    sum+=Number(contentCells[2])
  }
console.log(sum);