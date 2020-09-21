fetch("https://api.github.com/users/michaelsatterfield/events", {headers: {'Authorization': 'github_API_Token'}})
    .then (result => result.json())
    // .then (data => console.log(data))
    .then (data => console.log((data[0].created_at),(data)))
    //then(events => events.filter(event => event.type === "PushEvents"))
    .catch(error => console.log(error))




function wait(num){
    return new Promise((resolve,reject)=> {
        setTimeout(() =>{
            (isNaN(num)) ? reject('Failed to Comply') : resolve(num)

            // if (num !== isNaN(num)){
            //     resolve(num)
            // } else {
            //     reject('promise not resolved')
            // }
        }, num);
    })
}
console.log(wait(400))



wait(Math.floor(Math.random()*10000)).then((num) => console.log(` You\'ll see this after ${num/1000} seconds`));
wait(2000).then((num) => console.log(` You\'ll see this after ${num/1000} seconds` ));