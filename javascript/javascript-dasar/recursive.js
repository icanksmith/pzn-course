function sum(n){
    if (n === 1) return 1;
    else return n + sum(n - 1);
}

console.log(sum(5));
// 5 + sum(4)
// 5 + 4 + sum(3)
// 5 + 4 + 3 + sum(2)
// 5 + 4 + 3 + 2 + sum(1)
// 1 + (2 + (3 + (4 + (5))))
