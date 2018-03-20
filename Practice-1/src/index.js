import Counter from './Counter';


const counter = new Counter();

let button = document.createElement('button');
button.innerHTML = 'Clicked ' + counter.getCount+' Times';
button.onclick = function() {
    counter.increase();
    button.innerHTML = 'Clicked ' + counter.getCount + ' Times';
};
// where do we want to have the button to appear?
// you can append it to another element just by doing something like
// document.getElementById('foobutton').appendChild(button);
document.body.appendChild(button);
