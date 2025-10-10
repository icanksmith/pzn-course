import fs from 'fs';

const writer = fs.createWriteStream("target.log");

writer.write('icank\n');
writer.write('smith');
writer.end();

const reader = fs.createReadStream('target.log');
reader.addListener('data', (data) => {
    console.log(data.toString());
});