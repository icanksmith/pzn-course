import readline from 'readline';
import process from 'process';

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question('siapa nama anda: ', (name) => {
    console.log(`Halo ${name}`);
    input.close();
});
