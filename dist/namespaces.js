var DatabaseEntity;
(function (DatabaseEntity) {
    var User = /** @class */ (function () {
        function User(name) {
            this.name = name;
        }
        return User;
    }());
    var myUser = new User("Kevin");
    console.log(myUser);
})(DatabaseEntity || (DatabaseEntity = {}));
