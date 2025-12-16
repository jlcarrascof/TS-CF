(() => {
    class Animal {
        name: "Generic Animal";
        private age = 10;
        sayHi() {
            console.log("Grrr", this.age);
        }
    }

    class Dog extends Animal {
        type: "German Sheld";
    }

    const myAnimal: Animal = new Animal();
    myAnimal.sayHi();    

    const myDog: Dog = new Dog();
    console.log(myDog.type);

})();
