"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var t = _interopRequireWildcard(require("babel-types"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var _default = function _default() {
  return {
    visitor: {
      TemplateLiteral: function TemplateLiteral(path) {
        console.log(path.node.quasis[0]);
        if (path.node.quasis[0] && path.node.quasis[0].value.raw === 'formula(') console.log('yes');
        console.log('----------------------');
        path.replaceWith(t.callExpression(t.memberExpression(t.identifier('Animated'), t.identifier('add')), path.node.expressions));
      }
    }
  };
};

exports["default"] = _default;