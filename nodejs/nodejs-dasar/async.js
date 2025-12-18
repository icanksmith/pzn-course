function tryPromise(){
    return Promise.resolve('icank');
}

const name = await tryPromise();
console.log(name); 