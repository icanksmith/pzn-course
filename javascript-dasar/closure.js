function adder(a){
    const name = 'icank';
    function add(param){
        console.log(name);
        return a + param;
    }
    return add
}

const addTwo = adder(2);
console.log(addTwo(10));