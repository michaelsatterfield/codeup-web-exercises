fetch("https://api.github.com/users/michaelsatterfield/events", {headers: {'Authorization': 'fcf2b4aefa29f53babd0cd2e9072086527745e8a'}})
    .then (result => result.json())
    .then (data => console.log(data[0].created_at))
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
// console.log(wait(400))



wait(3000).then((num) => console.log(`You\'ll see this after ${num} seconds`));
wait(2000).then((num) => console.log(`You\'ll see this after ${num} seconds`));