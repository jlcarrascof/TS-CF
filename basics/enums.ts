enum Users {
    NormalUser = 5,
    PayedUser = 7,
    AdminUser = 9,
    MegaUser = 11,
} 

enum Users2 {
    NormalUser = 'normal',
    PayedUser = 'payed',
    AdminUser = 'admin',
    MegaUser = 'mega',
} 

const myUser = Users.AdminUser;
console.log(myUser);
const myUser2 = Users2.AdminUser;
console.log(myUser2);
