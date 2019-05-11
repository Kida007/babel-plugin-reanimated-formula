var babel = require("@babel/core");
var fs = require("fs")
const code = fs.readFileSync(`${__dirname}/input.js`).toString();
//console.log(code);
var alpha = require('./plugin');
const transformedCode = babel.transform(code, { plugins: [alpha], code:true, ast:false}).code
fs.writeFileSync(`${__dirname}/output.js`, transformedCode);
