
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// Multiplication Table Tests
// TODO: Use these existing tests to build the returnMultiplicationTable function
describe("returnMultiplicationTable", function() {
    it("should be defined", function() {
        expect(returnMultiplicationTable).toBeDefined()
    });
    it("should return a string when passed one integer", function() {
        expect(typeof returnMultiplicationTable(1)).toEqual("string");
        expect(typeof returnMultiplicationTable(10)).toEqual("string");
        expect(typeof returnMultiplicationTable(7)).toEqual("string");
    })
    it("should return the correct string output when passed one integer", function() {
        expect(returnMultiplicationTable(7)).toEqual("7 x 1 = 7\n" +
            "7 x 2 = 14\n" +
            "7 x 3 = 21\n" +
            "7 x 4 = 28\n" +
            "7 x 5 = 35\n" +
            "7 x 6 = 42\n" +
            "7 x 7 = 49\n" +
            "7 x 8 = 56\n" +
            "7 x 9 = 63\n" +
            "7 x 10 = 70");
    });
});


// Random Number Even/Odd Messages Tests
describe("returnEvenOddMessage", function() {
    it("should be defined", function() {
        // TODO: add an assertion to verify that the function is defined
        expect(typeof returnEvenOddMessage).toBe('function')
    });
    it("should return a string when passed an integer", function() {
        // TODO: add an assertion verifying that the function returns a string when passed an integer
        expect(typeof returnEvenOddMessage(getRandomInt(1, 10))).toBe('string')
    });
    it("should return the correct message when passed an integer", function() {
        // TODO: add several assertions that verify the correct string output for a given integer input
        var rand = getRandomInt(1, 10)
        if (rand%2 === 0) {
            expect(returnEvenOddMessage(rand).endsWith('even')).toBe(true)
        } else {
            expect(returnEvenOddMessage(rand).endsWith('odd')).toBe(true)
        }
    });
});
describe("returnTenEvenOddMessages", function() {

    // TODO: add a test to verify that the function is defined
    it("should be defined", function() {
        expect(typeof returnTenEvenOddMessages).toBe('function')
    });

    it("should return an output that ends with the word 'odd' or 'even'", function() {
        var output = returnTenEvenOddMessages();
        // TODO: add an assertion to verify that the function output ends with either "even" or "odd"
        expect(output.endsWith('even') || output.endsWith('odd')).toBe(true)
    });
    it("should return an output with 10 lines", function() {
        expect(returnTenEvenOddMessages().split("\n").length).toEqual(10);
    });
    it("should return a message with the expected numbers", function() {
        /**
         * This function compares two arrays (the numbers in the returnTenEvenOddMessages output and the array of expected numbers)
         * @returns {boolean} indicates if all numbers from the function output fall within the expected number range
         */
        function outputContainsExpectedNumbers() {
            // the numbers extracted from the output message of the returnTenEvenOddMessages function
            const actualOutputNumbers = returnTenEvenOddMessages().split(/(\s+)/).filter(num => !isNaN(parseInt(num)));
            // an array of all numeric integer strings from 20 through 200
            const expectedPossibleNumbers = Array.from(Array(181), (_, i) => i + 20).map(num => String(num));
            // filter out all matching numbers between the actual array and expected array of numbers and return true if all actual numbers are filtered out
            const finalLength = actualOutputNumbers.filter(num => !expectedPossibleNumbers.includes(num)).length;
            console.log(finalLength);
            return finalLength === 0;
        }

        // TODO: assert that the outputContainsExpectedNumbers function returns true
        expect(outputContainsExpectedNumbers()).toBe(true)

    });
});


// Number Sail Tests
describe("returnNumberSail", function() {
    // TODO: include a test to verify that the function is defined
    it('returnNumberSail should be defined', function() {
        expect(typeof returnNumberSail).toBe('function');
    });

    // TODO: include a test to verify that the function output is a string
    it('returnNumberSail() should return a number when passed a string', function() {
        expect(typeof returnNumberSail()).toBe('string')
    })

    // TODO: include a test to verify that the function output matches the following value
    var expectedValue = "1\n" +
        "22\n" +
        "333\n" +
        "4444\n" +
        "55555\n" +
        "666666\n" +
        "7777777\n" +
        "88888888\n" +
        "999999999";
    it('returnNumberSail() should return a number sail.', function() {
        expect(returnNumberSail()).toBe(expectedValue)
    })
});


// Count Down in Fives Tests
// TODO: include another test suite that verifies that returnCountDownFrom100InFives is defined (first test) and returns the expected output (second test)
describe('returnCountDownFrom100InFives', function () {
    it('returnCountDownFrom100InFives should be defined', function() {
        expect(typeof returnCountDownFrom100InFives).toBe('function');
    });
    it('returnCountDownFrom100InFives() should return a number when passed a number', function() {
        expect(typeof returnCountDownFrom100InFives()).toBe('string')
    })
    it('returnCountDownFrom100InFives() should return a number one greater than the input', function() {
        expect(returnCountDownFrom100InFives()).toBe(
            '100\n' +
            '95\n' +
            '90\n' +
            '85\n' +
            '80\n' +
            '75\n' +
            '70\n' +
            '65\n' +
            '60\n' +
            '55\n' +
            '50\n' +
            '45\n' +
            '40\n' +
            '35\n' +
            '30\n' +
            '25\n' +
            '20\n' +
            '15\n' +
            '10\n' +
            '5')
    })
})
