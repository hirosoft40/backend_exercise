// ===== CREATING OWN PROMISE
// Use promise to get API data

var ourPromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('completed function.')
    }, 3000);

    setTimeout(()=>{
        reject('error')
    }, 3000);
})

ourPromise.then((data)=>{
    console.log(data);
});

ourPromise.catch((data)=>{
    console.log('Done', data);
});

// ===== BACKEND PROMISE
// pg-promise [pg: postgras]
