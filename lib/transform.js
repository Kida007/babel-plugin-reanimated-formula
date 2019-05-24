"use strict";

var babel = require("@babel/core");

var fs = require("fs");

var code = fs.readFileSync("".concat(__dirname, "/input.js")).toString(); //console.log(code);

var alpha = require('./plugin');

var transformedCode = babel.transform(code, {
  plugins: [alpha],
  code: true,
  ast: false
}).code;
fs.writeFileSync("".concat(__dirname, "/output.js"), transformedCode);