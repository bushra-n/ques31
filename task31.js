"use strict";
// Task 31 No user:Add an if test to exercise 28 to make sure that the list is not empty.
// If the list is empty,print msg we need to find some users.
// Remove all users name from your array and make sure that the correct msg is printed.
let users = ["Admin", "Nasir", "Munazzah", "Tehmina", "Ammar"];
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let user of users) {
        if (user === "Admin") {
            console.log("Admin!would you like to see a status report?");
        }
        else {
            console.log(`Hello ${user} ,thank you for logging in again `);
        }
    }
}
// part II 
users = [];
if (users.length === 0) {
    console.log("We need to find some users.");
}
