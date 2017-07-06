import {HelloWorld} from './hello-world/hello-world';

document.body.onload = () => {
    const hello = new HelloWorld();
    hello.say();
}
