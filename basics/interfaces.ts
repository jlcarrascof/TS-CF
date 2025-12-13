interface Person {
    name: string;
    code: string | number;
    charge: number;
    description: string; 
}

let person: Person = {
    name: "Kevin",
    code: "01",
    charge: 1,
    description: "Hello", 
}

person.code = 50;