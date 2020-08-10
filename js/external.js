"use strict";



alert('Welcome to My Website!')


console.log('hello from html js');

// var num2 = 3+8
// var greeting = "hey my man"
// var cohort = 'io'
// var message = greeting + ' ' + cohort;
// console.log(message);
// alert (greeting);
// var question = "Are you over 21?"
// var answer= confirm(question);
// console.log('answer='+answer);
//
//
// var question2 = "what is your sign?"
// var answer2 = prompt(question2);
// console.log(answer2)
// console.log(typeof answer2);
console.log("Hello from external JavaScript")

var question3 = 'what is your favorite color?'
var answer3 = prompt(question3);
console.log(answer3)
alert('Great, ' + answer3 + ' is my favorite color too!')

var mermaid_ques1 = prompt('How many days did you rent Little Mermaid for?')
console.log(mermaid_ques1)

var bear_ques = prompt('How many days did you rent Brother Bear for?')
console.log(bear_ques)

var hercules_ques = prompt('How many days did you rent Hercules for?')
console.log(hercules_ques)

alert("Your Total is $" + (parseInt(mermaid_ques1) + parseInt(bear_ques) + parseInt(hercules_ques)) * 3 + ", Thank You!")



var googleRate = 400;
var amazonRate = 380;
var fbrate = 350;

var googlehrs = prompt('How many hours worked for Google');


var amazonhrs = prompt('How many hours worked for Amazon');


var fbhrs = prompt('How many hours worked for Facebook');

var weekpay = prompt(googleRate *googlehrs) + (amazonRate * amazonhrs) + (fbrate * fbhrs);






