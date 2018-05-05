#!/usr/bin/node

function tellMeTheType(value) {
    return typeof value;
}

class MyClass {};

const allTypes = [
    0, // number
    true, // boolean
    undefined, // undefined
    null, // object
    'I love js', // string
    Symbol('js'), // symbol
    {}, // object
    [], // object
    tellMeTheType, // function
    MyClass, // function
];

allTypes.map(function(each) {
    console.log(tellMeTheType(each));
});
