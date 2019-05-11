import * as t from "babel-types";

export default () => {
    return {
        visitor:{
            TemplateLiteral(path){
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