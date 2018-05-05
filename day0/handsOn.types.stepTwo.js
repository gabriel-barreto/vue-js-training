#!/usr/bin/node

function tellMeTheType(value) {
    return typeof value;
}

const types = [
    0, // number
    true, // boolean
    undefined, // undefined
    null, // object
    'I love js', // string
    Symbol('js'), // symbol
    {}, // object
    [], // object
];

types.map(function(each) {
    console.log(tellMeTheType(each));
});
