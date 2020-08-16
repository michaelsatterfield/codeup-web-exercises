const speak = function(name, time){
    alert("Good " + time + ' ' + name);
}

// speak('michael', 'marning');
//
// speak

speak('Ofelia', 'Evening');

// speak('Ofelia', 'Afternoon');
//
// speak('Ofelia', 'Morning');
//
// speak('Ofelia', 'Day');


const love = function(){
 var q = confirm("Do You Love Me?")
    if (q === true){
        alert("I love you too")
    } else {
    alert("well I still love you anywayz!")
}
}
love();