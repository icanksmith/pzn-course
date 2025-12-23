import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.addListener('hello', (name) => {
    console.log(`Halo ${name}`);
});

emitter.addListener('hello', (name) => {
    console.log(`Hellow ${name}`);
});

emitter.emit('hello', 'icank');
emitter.emit('beda', 'ajrun'); // tidak ketrigger karna jenis event beda
