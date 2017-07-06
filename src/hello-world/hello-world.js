import './hello-world.scss';

export class HelloWorld {
    constructor(message = 'Hello world!') {
        this.message = message;
    }

    say() {
        const element = document.createElement('div');
        element.classList.add('hello-world');
        element.innerHTML = this.message;
        document.body.appendChild(element);
    }
}
