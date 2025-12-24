const sayHi = (name) => {
    console.log(`Hi ${name}`);
};

sayHi('CodigoFacilito students');

function sayGoodbye(name) {
    console.log(`Goodbye, ${name}!!. We almost finish the module`);
}

sayGoodbye('Students');

function show(): number {
    console.log('Hi');
    return 1;
}

show();

const response = {
    id: 1,
    name: 'Codigo Facilito',
    charge: 'Developer',
    number: 4,
}

function myResponse({name, ...other}: {id; name; charge; number}): number {
    console.log('The sent id is: ', name);
    return 1;
}

myResponse(response);