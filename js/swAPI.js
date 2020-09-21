fetch("http://swapi.dev/api/people/?page=3")
    .then(result => result.json([name]))
    .then(info => console.log(info))


fetch("https://api.github.com/users/")
    .then(response => response.json())
    .then(result => {result.forEach(user => {console.log(result)})})
    .catch(error => console.log(error))

//example

const makeRequest = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve('Here is your data: ...');
            } else {
                reject('Network Connection Error!');
            }
        }, 2000);
    });
}

const request = makeRequest();
console.log(request); // pending promise
request.then(message => console.log('Promise resolved!', message));
// if resolved, will log "Promise resolved!" and "Here is your data: ..."
request.catch(message => console.log('Promise rejected!', message));
// if rejected, will log "Promise rejected!" and "Network Connection Error!"