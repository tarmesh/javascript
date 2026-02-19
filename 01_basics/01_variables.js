const accountId = 10021;
let accountEmail = "tarmesh1234@gmail.com"
var accountPass = "2145236"
userState = "Delhi" 
let accountCity;

// accountId =2  -- it is not allowed as it is a constant variable

accountEmail = "newid@gmail.com"
accountPass = "newpass1234"
userState = "Mumbai"

/*
always try to use let and const instead of var as var is function scoped and let and const are block scoped.

*/

console.table([accountId, accountEmail, accountPass, userState, accountCity])