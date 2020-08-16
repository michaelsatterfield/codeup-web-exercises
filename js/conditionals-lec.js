"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
// code here runs if condition evaluates to true
// }


// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = false;
if (isAdmin === true){

}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = true;
if (birthday) {

}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true
var isRainy = true;
if (isRainy) {
    alert("its raining")
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var itemCost = 300;
var currentBalance = 200;
if (itemCost <= currentBalance) {
    alert("you have sufficient funds")
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 0;
if (numberOfLives === 0)
    alert('sorry game over')


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var weather = "snowing"
 if (weather == 'snowing')
     alert("it's snowing")

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 12;
 if (numberInput > 10)
     alert("true")

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.
var checkWeather = function(weather) {
     if (weather === "snowing") {
         alert("it's snowing")
     }
}
 checkWeather(weather);

// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }



// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var isAdmin = false;
if(isAdmin) {
    alert("show non admin navbar")
} else {
    alert("show admin")
}


//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
var isRainy = true;
if(isRainy) {
    alert("its rain");
}
else {
    alert(have )
}


//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
var numberOfLives = 5;
if(numberOfLives == 0) {
    alert("sorry game over")
} else {
    alert("next level")
}


//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
var weather = "snowing";
if(weather === "snowing") {
    alert("its Snowing!")
} else {
    alert("check back for more details")
}


//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
var numberInput = 11;
if(numberInput > 10) {
    alert(true)
} else {
    alert("the number is less than ten")
}



//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver(lives) {
    if(numberOfLives == 0) {
        alert("sorry game over")
    } else {
        alert("next level")
    }
}


checkIfGameIsOver(1)

//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"

 if(confirm("are you old enough")) {

     alert("enter")
 } else {
     alert("sorry")
 }




// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }



// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather = "snowing";
 if (weather === "snowing") {
     alert("its snowing")
 } else if (weather === "raining") {
     alert("rain")
 } else {
     alert("have a fine day")
 }





//TODO Together: refactor the above statement as a function



//TODO: Write a function that accepts a string that is a traffic light color as an input.
// When this function is called, it should return a message informing the user what to do
// when approaching that color light at an intersection.
var color = function (light) {
     if(light === "red") {
         alert("stop")
     } else if (light === "yellow") {
         alert("slow")
     } else {
         alert("go")
     }

}
 color("yellow")



// ================ NESTED STATEMENTS ===============
//TODO Together: If user is under 15, they are not eligible for a learners permit, else they are. If they are eligible, check age. If they are 15 they are eligible for a learners permit, if they are 16 or older and have a permit, they are eligible for license, if they are 16 or older and do not have a permit, they are not eligble for a license.





// ================ TERNARY STATEMENT ================
//TODO Together: Regular way - rewrite as ternary
//
// var message;
// var success =
// //
// // if (success) {
// //     message = "Operation was successful.";
// // } else {
// //     message = "Oops, something went wrong.";
// // }
// // console.log(message);
//
// //WRITE YOUR TERNARY STATEMENT HERE!
// message = (success)  "operation successful": "oops something wrong";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

// var weather = "sunny";
// var weatherMessage;

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }
// console.log(weatherMessage);

//WRITE YOUR TERNARY STATEMENT HERE!



// var  numberOfLives
//
//      alert((numberOfLives === 0 )) ? "sorry game over" : "next level")


// =============== SWITCH STATEMENT ================
//TODO Together:

     // switch (value) {
     //     case 0:
     //
     //         break;
     //     case 1:
     //
     //         break:
     //
     //     default:
     // }

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);


switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("what a coincedence")
        break;
    case "cheese":
        alert("just plain cheese?");
        break;
    case "ham":
        alert("ham is good");
        break;
    default:
        alert(pizzaPreference + " is okay too.")
}


// if (pizzaPreference === "pineapple and hot sauce") {
//     alert("What a coincidence, that's my favorite!");
// } else if (pizzaPreference === "cheese") {
//     alert("Just plain cheese? Okay...");
// } else if (pizzaPreference === "ham") {
//     alert("Ham is easy to spell and awesome!");
// } else {
//     alert(pizzaPreference + " isn't my favorite, but let's order some!");
// }
// var weather = "snowing";
// if (weather === "snowing") {
//     alert("its snowing")
// } else if (weather === "raining") {
//     alert("rain")
// } else {
//     alert("have a fine day")
// }
//




//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.
var weather = "snowing"
switch(weather) {
    case "snowing":
        alert("its snowing")
        break;
    case "sunny":
        alert("lets go outside")
        break;
    case "rainy":
        alert("its wet and rainy")
        break;
    default:
        alert(weather + "...i dont know that weather")
}


//TODO: Rewrite the intersection function from earlier as a switch statement.

function checklights(color) {
    var color = prompt("what color is light")
    switch (color) {
        case "green":
            alert('you may go');
            break;
        case "red":
            alert('you may not go');
            break;

    }
}
checklights();






// ================ REVERSE ENGINEERING =================
// Visit each of these links; outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html

     (conditon)