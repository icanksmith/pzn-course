// function yg ada didalam object disebut sebagai object method

const person = {
    fullName: function (name) {
        return `Hello ${name}`
    },
    age: 19
}

console.log(person.fullName('Icank Smith'));

const street = {
    province: 'DKI Jakarta'
}

street.city = function (city){
    return `Kota ${city}`;
}

console.log(street.city('Banten'));
// console.log(street)