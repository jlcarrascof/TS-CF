var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var sayHi = function (name) {
    console.log("Hi ".concat(name));
};
sayHi('CodigoFacilito students');
function sayGoodbye(name) {
    console.log("Goodbye, ".concat(name, "!!. We almost finish the module"));
}
sayGoodbye('Students');
function show() {
    console.log('Hi');
    return 1;
}
show();
var response = {
    id: 1,
    name: 'Codigo Facilito',
    charge: 'Developer',
    number: 4,
};
function myResponse(_a) {
    var name = _a.name, other = __rest(_a, ["name"]);
    console.log('The sent id is: ', name);
    return 1;
}
myResponse(response);
