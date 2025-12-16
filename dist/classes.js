var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sayHi = function () {
        console.log("Grrr");
    };
    return Animal;
}());
var myAnimal = new Animal();
myAnimal.sayHi();
