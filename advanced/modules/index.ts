/* Traditional way
import { generateId, PI } from "./utils.module";
import { User as Person } from './utils.module';

const myNumber = 10 * PI;

const myUser: Person = { id: generateId.toString(), name: 'Kevin'};
*/

/* Another way */
import * as Utils from './utils.module';

const myNumber = 10 * Utils.PI;

const myUser: Utils.User = { id: Utils.generateId.toString(), name: 'Kevin'};

console.log({
    myNumber,
    myUser
});
