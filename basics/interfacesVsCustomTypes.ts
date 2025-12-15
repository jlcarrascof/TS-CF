type Person = {
    name: string;
    age: number;
}

interface Employee extends Person {
    charge: string;
}

const newEmployee: Employee = {
    name: "",
    age: 40,
    charge: "",
}