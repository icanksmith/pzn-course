const buffer = Buffer.from('icank smith', 'utf-8');

console.log(buffer.toString());
console.log(buffer.toString('base64'));
console.log(buffer.toString('hex'));

const bufferBase64 = Buffer.from('aWNhbmsgc21pdGg=', 'base64');
console.log(bufferBase64.toString('utf-8'));