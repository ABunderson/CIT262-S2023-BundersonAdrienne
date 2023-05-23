import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("Hello World", ()=>{

    const hello = sayHello();

    console.log(hello);

    assert.equal(hello, "hello");

});

