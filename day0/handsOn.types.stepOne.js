#!/usr/bin/node

function tellMeTheType(value) {
    return typeof value;
};

const primitives = [
    0, // number
    true, // boolean
    undefined, // undefined
    null, // object
    'I love js', // string
    Symbol('js'), // symbol
];

primitives.map(function(each) {
    console.log(tellMeTheType(each));
});