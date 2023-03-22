var callerObj = {
    name: 'jon'
};
function checkMyThis(age) {
    console.log("What is this ".concat(this));
    console.log("Do I have a name? ".concat(this.name));
    this.age = age;
    console.log("What is my age ".concat(this.age));
}
checkMyThis.call(callerObj, 25);
