/*

* Sample piece of code on implementing JSON file
* @author Shrusti Sanket
* version v18.4.0

*/

const fs = require('fs');

let rawdata = fs.readFileSync('users.json');
let student = JSON.parse(rawdata);
console.log(student);
