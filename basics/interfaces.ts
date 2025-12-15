interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string; 
}

let person: Person = {
    name: "Kevin",
    code: "01",
    charge: 1,
    description: "Hello",
    sayHello: () => {
        // saveToken();
        // takePhoto();
        console.log("Saying hello...");
        const people = [1, 2, 3, 4];
        people.map((p) => p.toFixed(1));
        return "Hello!";
    }, 
}

person.code = 50;

let secondPerson: Person = {
    name: "",
    code: "",
    charge: 0,
    sayHello: () => "Hello there!",
};

secondPerson.description?.toUpperCase();