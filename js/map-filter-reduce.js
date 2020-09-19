const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
//********filter out the users with less than 3 languages
const threeLang = users.filter(lang => lang.languages < lang.languages[2])
console.log(threeLang)



//Use .map to create an array of strings where each element is a user's email address


// const emails = users.map(({email}) => email)  or

const emails = users.map(userEmail => userEmail.email)
console.log(emails)

// Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const totalYears = users.reduce((accum,{yearsOfExperience}) => accum + yearsOfExperience , 0)
console.log(totalYears)
const avgYears = totalYears/users.length
console.log(avgYears)
// Use .reduce to get the longest email from the list of users.
const longestEmail = users.reduce((accum, curr) =>{
    if(curr.email.length > accum.length){
       accum = curr.email
    }
    return accum
},'')
console.log(longestEmail)

// Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.


const userNames = users.reduce((saying, user) => saying += `${user.name} `,'Your instructors are: ')
console.log(userNames)

// Use .reduce to get the unique list of languages from the list of users.
const uniqueEmail = users.reduce((string, lang) =>
    lang.languages+ ",".slice(0,-1) + string
    ,"")
console.log(uniqueEmail)


