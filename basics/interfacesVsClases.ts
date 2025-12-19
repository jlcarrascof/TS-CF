interface Person {
    name: string;
    code: string | number;
    charge: number;
    description?: string;
    sayHello: () => string; 
}