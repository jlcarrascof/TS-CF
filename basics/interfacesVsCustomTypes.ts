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

// Union Types ....

type User = {
    id: string;
}

type Admin = User & Person;

type ServiceResponseToken = string | null | undefined | number;

type UserTypes = "admin" | "superUser" | 0;

const myUser: UserTypes = 0;

interface Developer {
    name: string;
    stack: string[];
}

interface Developer {
    phone: string;
}

const me: Developer = {
    name: "Javier",
    stack: ["JavaScript", "TypeScript", "NodeJS"],
    phone: "555-5555",
}