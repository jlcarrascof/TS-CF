(() => {

    const sayHi = (name: string) => {
        console.log(`Hi ${name}`);
    };

    sayHi('CodigoFacilito students');

    function sayGoodbye(name: string) {
        console.log(`Goodbye, ${name}!!. We almost finish the module`);
    }

    sayGoodbye('Students');

    function show(): number {
        console.log('Hi');
        return 1;
    }

    show();

    interface responseServiceCD {
        id: number,
        name: string,
        charge: string,
        number: number,
    }

    const response: responseServiceCD = {
        id: 1,
        name: 'Codigo Facilito',
        charge: 'Developer',
        number: 4,
    }

    function myResponse({name, ...other}: responseServiceCD): number {
        console.log('The name sent is: ', name);
        console.log('The other fields are: ', other);
        return 1;
    }

    myResponse(response);    

})();
