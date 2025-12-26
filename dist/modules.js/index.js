"use strict";
/* Traditional way
import { generateId, PI } from "./utils.module";
import { User as Person } from './utils.module';

const myNumber = 10 * PI;

const myUser: Person = { id: generateId.toString(), name: 'Kevin'};
*/
Object.defineProperty(exports, "__esModule", { value: true });
/* Another way */
var Utils = require("./utils.module");
var myNumber = 10 * Utils.PI;
var myUser = { id: Utils.generateId().toString(), name: 'Kevin' };
console.log({
    myNumber: myNumber,
    myUser: myUser
});
