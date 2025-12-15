var Users;
(function (Users) {
    Users[Users["NormalUser"] = 5] = "NormalUser";
    Users[Users["PayedUser"] = 7] = "PayedUser";
    Users[Users["AdminUser"] = 9] = "AdminUser";
    Users[Users["MegaUser"] = 11] = "MegaUser";
})(Users || (Users = {}));
var Users2;
(function (Users2) {
    Users2["NormalUser"] = "normal";
    Users2["PayedUser"] = "payed";
    Users2["AdminUser"] = "admin";
    Users2["MegaUser"] = "mega";
})(Users2 || (Users2 = {}));
var myUser = Users.AdminUser;
console.log(myUser);
var myUser2 = Users2.AdminUser;
console.log(myUser2);
