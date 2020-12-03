const promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve('End'), 5000)
})

(async function(){
    console.log('Begin')

    const text  = await promise
    console.log(text)

    const naoPromise = 'End'
    console.log(naoPromise)

    // Or
    console.log(await promise)
    promise.then(console.log)

    // Or
    try{
        const res = promise.then( res => {
            setTimeout(() => console.log(res), 5000)
        })
    } catch(rej){
        console.error(rej)
    }

    promise.then(
        (res) => setTimeout(() => console.log(res), 5000),
        (rej) => console.error(rej)
    )
})()