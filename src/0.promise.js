const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('End'), 5000)
})

//IIFE
(function(){
    return new Promise((resolve, reject)=>{
        console.log('Olá mundo')
        resolve()
    })
})()

(async function(){
    console.log('Olá mundo') //automaticamente retorne uma promise
})()

console.log('Begin');
promise.then((text) => console.log(text))
// Or
promise.then(console.log)
// Or
promise.then(
    (res) => setTimeout(() => console.log(res), 5000),
    (rej) => console.error(rej)
)