var message = require('./message');

import Button from './button';

console.log(Button);

// var newMessage = () => (`<p>${message.hi} ${message.event}</p>`);
var newMessage = () => (Button.button);


var app = document.getElementById('app');
app.innerHTML = newMessage();

Button.attachEl();

if (module.hot) {
  module.hot.accept();
}
