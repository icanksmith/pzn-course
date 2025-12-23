import proces from "process";

process.addListener('exit', (exitCode) => {
    console.log(`keluar dengan kode: ${exitCode}`);
});

console.log(process.version);
console.table(process.argv);