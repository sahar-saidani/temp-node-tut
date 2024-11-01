//CommonJS (librery), every file is module
//Modules - Encapsulated Code 

const names = require ('./name');
const Name = require ('./util');
console.log(names);

Name(names.john);
Name(names.peter);