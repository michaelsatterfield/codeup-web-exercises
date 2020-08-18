const returnMultiplicationTable = function (num) {
    let output = ""
    for (var i = 1; i <= 10; i++) {
        output += num + " x " + i + " = " + (num*i);
        if (i !== 10) {
          output += "\n"
        }
    }
    return output;
}

const returnEvenOddMessage = function(num) {
    if(!Number.isInteger(num)) return num + " is invalid"
    if (num%2 === 0) return num + " is even"
    else return num + " is odd"
}

function returnTenEvenOddMessages() {
    let output;
    for (let i = 0; i < 10; i++) {
        output += returnEvenOddMessage(getRandomInt(20, 200))
        if (i < 9) output += "\n"
    }
    return output
}

function returnNumberSail(){
    let output = '';
    for (let i = 1; i < 10 ; i++) {
        for (let j =1; j <= 1; j++) {
            output += i
        }
        if (i < 9) output += '\n'
    }
    return output
}
console.log(returnNumberSail())