import Counter from './Counter';

const counter = new Counter();

let button = document.createElement('button');
button.innerHTML = 'Clicked ' + counter.getCount+' Times';
button.onclick = function() {
    counter.increase();
    button.innerHTML = 'Clicked ' + counter.getCount + ' Times';
};
button.className = 'myButton';
document.body.appendChild(button);
