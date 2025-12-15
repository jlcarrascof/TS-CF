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