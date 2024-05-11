"use strict";
//Question 15:
//Changing Guest list: You just heared that one of your guests can't make to the dinner, so you need to send out a new set of invitation. You'll have to think of someone else to invite.
//Answer:
let guestArr = ["khalid", "Imran", "Ashir", "Azlan"];
let canNotAttend = "khalid";
//console.log(canNotAttend + " ", "can not attend the dinner");
let newGuest = "Afifa";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
//console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items}, you are invited to the dinner`));
