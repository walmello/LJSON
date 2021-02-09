# LJSON (Lambda JSON)
This simple script can save arrow functions on JSON objects

How to use?

there is 2 very simple functions that works like JSON.parse and JSON.stringify
after importing the LSON.js file just use it like LJSON.parse

example:

const object = {
    test: 123,
    hello: name => {
        if(name){
            return `Hello ${name}!`
        } else {
            return `Hello World!`
        }
    },
}

// It preserves the arrow functions when generating the JSON string (don't work with regular ones yet)
const json = LJSON.stringify(objeto)

// You can pull back again with

const hello = LJSON.parse(json).hello

// and use it 

hello("Irineu")
