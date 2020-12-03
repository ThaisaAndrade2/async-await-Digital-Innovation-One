const coinFlip = new Promise((resolve, reject) => Math.random() > 0.5 ? resolve(true) : reject(false));

console.log('Begin')

(async function(){
    //const result = await coinFlip.catch(err => 'erro')
    const result = await coinFlip
    .then(result => `o resultado é: ${result}`)
    .then(text => `Alguém disse que ${text}`) //Muito bom para fazer chamada de API

new Promise((resolve) => setTimeout(() => resolve(), 2000)).then(()=> console.log('Yay'))
})()

