import * as t from "babel-types";
export default () => {
    return {
        visitor:{
            TemplateLiteral(path){
                if(path.node.quasis[0] && path.node.quasis[0].value.raw==='formula(')
                path.replaceWith(
                    t.callExpression(
                      t.memberExpression(t.identifier('Animated'), t.identifier('add')),
                      path.node.expressions
                    )
                  );
            }
        }
    }
}