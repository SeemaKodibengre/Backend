
const OS= require('os');
//INFO ABOUT CURRENT USER
const user=OS.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`method returns the system uptime is ${OS.uptime()} seconds`);

const currentOS={
    name:OS.type(),
    release:OS.release(),
    totalMemory:OS.totalmem(),
    freeMemory:OS.freemem()
}
console.log(currentOS);
