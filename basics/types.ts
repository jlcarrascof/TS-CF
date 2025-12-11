console.log("Data Types in TypeScript");

let herAge: number = 30;
let userName: string = "John Doe";
let isSenior: boolean = true;
let person: Object = { name: "Jane", age: 25 };
let hobbies: string[] = ["Reading", "Traveling", "Swimming"];
let scores: Array<number> = [95, 85, 76];
let fruits: Object[] = [{ name: "Apple" }, { name: "Banana" }];

let response: any = "This can be any type";
response = 42;
response = true;
response = ["Mixed", 100, false];

/* --------- Data types II -------------------- */

function greet(): void {
    console.log('Hello');
}

let response2: unknown;
response2 = true;

if (response2) {

}    

let response3: null;
let response4: undefined;