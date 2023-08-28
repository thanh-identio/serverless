const Responses = require("./API_Responses");

exports.handler = async event => {
    console.log("get info", event);
    if(event.pathParameters && event.pathParameters.ID)
        return Responses._200({message: `found something: ${event.pathParameters.ID}`});
    return Responses._400({message: "nada"});
}