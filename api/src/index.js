'use strict';

import Server from './config/server';

const server = new Server();

server.run();

/*
const tutu = 'toto';

console.log(`How are you, ${tutu}`);

let toto = (first, second) => {
    console.log(first, second);
};

function handleThings(name, opts = {}) {
    console.log(opts);
    return name;
}

server.hello();
console.log(handleThings('Hello world'));*/
