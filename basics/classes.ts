(() => {
    class Animal {
        name: "Generic Animal";
        private age = 10;
        sayHi() {
            console.log("Grrr", this.age);
        }
    }

    const myAnimal: Animal = new Animal();
    myAnimal.sayHi();    

})();
