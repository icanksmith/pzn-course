function* odd(n){
    for (let i = 0; i <= n; i++){
        if (i % 2 === 1){
            yield i;
        }
    }
}
const oddNum = odd(100)
// for (const num of odd(100)){
//     console.log(num);
// }

console.log(oddNum.next().value);
console.log(oddNum.next().value);
console.log(oddNum.next().value);
console.log(oddNum.next().value);
console.log(oddNum.next().value);
