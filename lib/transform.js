"use strict";

var _plugin = _interopRequireDefault(require("./plugin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babel = require("@babel/core");

var fs = require("fs");

const code = fs.readFileSync(`${__dirname}/input.js`).toString(); //console.log(code);

const transformedCode = babel.transform(code, {
  plugins: [_plugin.default],
  code: true,
  ast: false
}).code;
fs.writeFileSync(`${__dirname}/output.js`, transformedCode);