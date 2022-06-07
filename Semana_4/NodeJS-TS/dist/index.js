"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Lib import
const fs_1 = require("fs");
const url = __importStar(require("url"));
const query_string_1 = require("query-string");
const http_1 = require("http");
//URL address definition
const port = 5000;
const server = (0, http_1.createServer)((req, res) => {
    //Code Implementation
    let statusMessage;
    //URL decode
    const urlParse = url.parse(req.url ? req.url : '', true);
    //Receiving user information
    const params = (0, query_string_1.parse)(urlParse.search ? urlParse.search : '');
    //User Create/Update
    if (urlParse.pathname == '/create-update-user') {
        //Saving Information
        (0, fs_1.writeFile)(`users/${params.id}.txt`, JSON.stringify(params), function (err) {
            if (err)
                throw err;
            console.log('Saved!');
            statusMessage = 'User successfully registered/updated!';
            res.statusCode = 201;
            res.setHeader('Content-Type', 'text/plain');
            res.end(statusMessage);
        });
    }
});
//Server start
server.listen(port, () => {
    console.log(`Server running on port ${port}/`);
});
