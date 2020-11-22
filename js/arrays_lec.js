var something = "3";
var newArray = [1, true, "three"];
newArray.forEach(function( x,index){
    document.getElementById("demo").innerHTML += index + ":" + x + "<br>";
});
const htmlLoad = document.getElementById('movieList');
const addMovie = () => {
    // let stars = document.getElementById('movieRating').value;
    let userInput = document.getElementById('addMovie').value;
    console.log(userInput)
    let createInput = document.createElement("div")
    createInput.innerHTML =
        `<p class="movieClass col-lg-6 col-sm-12 ">${userInput} <br> 
        </button> <button onclick="this">Remove</button></p>`
    htmlLoad.appendChild(createInput)
    createInput.addEventListener("click", createInput.remove)
};



var students = [
    'Mando Salazar',
    'Audie Brattin',
    'Blossom Perez',
    'Caleb Wheeler',
    'Chris Parker',
    'Cory Holley',
    'Cruzanio Villarreal',
    'Damien Salazar',
    'Donelle Harris',
    'Eric Rencehausen',
    'Li Wang',
    'Michael Satterfield',
    'Michael Troia',
    'Patrick Larkin',
    'Roberto Cuyar',
    'Rocco Paccione',
    'Ryan Kendall',
    'Sahara Tijol',
    'Sedgwick House'
];
// console.log(students);

for (let i = 0; i < students.length; i++) {
    document.getElementById("students").innerHTML += (i+1) + ": " + students[i] +"<br>" ;
    console.log((i+1) + ": " + students[i]);
}


var pets = [
    'Tex the Australian Cattle Dog',
    'Charlie the Australian Labradoodle',
    'Baxter the Crack Dog',
    'John Rambo the Pit Bull',
    'Chewbie the Yorkie Mix',
    'Diana the Backyard Chicken',
    'Smore the Pit Bull Bull Mastiff',
    'Yoga the Chihuahua'
];

var callback = function(item,index, array){
    console.log((index+1) + ": " + item);
}
var callback2 = function(a,b,c) {
    console.log(a,b,c);
}
pets.forEach(function (pet){
    console.log(pet)
});
// students.forEach(callback);


// console.log(pets.length);
// console.log(students.length)
//
// console.log(pets[3] + " belongs with " + students[students.length - 1]);

// var daysOfTheWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
// var indexForToday = 4;
// var today = daysOfTheWeek[indexForToday]
// console.log(today);

