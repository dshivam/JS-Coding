Function.prototype.newBind = function(...args) {
    const context = this;
    return function(...args1) {
        context.call(...args, ...args1);
    }
}

const name = {
    firstName: 'Shivam',
    lastName: 'Dubey'
};

function printName(city, state) {
    console.log(this.firstName + ' ' + this.lastName + ', ' + city + ', ' + state)
}

let bPrintName = printName.bind(name, 'Fbd');
bPrintName('UP');
bPrintName = printName.newBind(name, 'Fbd');
bPrintName('MP');