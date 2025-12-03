const person = {
    firstName: 'Icank',
    lastName: 'Smith',
    address: {
        country: 'Indonesia',
        province: 'Central Java'
    }
}

const json = JSON.stringify(person);
console.log(json);

const personAgain = JSON.parse(json);
console.log(personAgain);