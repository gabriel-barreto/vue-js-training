// --> Create a prototype function
String.prototype.reverse = function() {
    let letters = this.split('');
    return letters.reverse().join('');
};

// --> Create a prototype value
String.prototype.lorem = 'Lorem Ipsum';

// --> See our prototypes working
const str = 'I love js prototypes!';
console.log(str.lorem);
console.log(str.reverse());