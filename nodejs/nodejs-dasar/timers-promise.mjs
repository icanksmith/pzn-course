import timer from 'timers/promises';

console.log(new Date());
await timer.setTimeout(5000);
console.log(new Date);