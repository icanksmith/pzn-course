const person = {
    firstName: 'Icank',
    lastName: 'Smith',
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        const arr = value.split(' ');
        this.firstName = arr[0];
        this.lastName = arr[1];
    }
}
// console.log(person.fullName);

person.fullName = 'Ajrun Kabir';
console.log(person);

person.fullName = 'Indra Wibowo';
console.log(person);

