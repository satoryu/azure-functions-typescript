"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            status: "200",
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Not Found"
        };
    }
};
exports.index = index;
//# sourceMappingURL=index.js.map