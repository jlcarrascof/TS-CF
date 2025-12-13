var Users;
(function (Users) {
    Users[Users["NormalUser"] = 5] = "NormalUser";
    Users[Users["PayedUser"] = 7] = "PayedUser";
    Users[Users["AdminUser"] = 9] = "AdminUser";
    Users[Users["MegaUser"] = 11] = "MegaUser";
})(Users || (Users = {}));
var myUser = Users.AdminUser;
console.log(myUser);
