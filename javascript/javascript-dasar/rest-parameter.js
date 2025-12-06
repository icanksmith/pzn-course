function fruitCalc(fruit, ...data){
    let item = 0;
    for (const element of data) {
        item += element;
    }
    return `There are ${item} of this ${fruit}`;
}

console.log(fruitCalc('Apple', 7, 8, 9, 10, 6));