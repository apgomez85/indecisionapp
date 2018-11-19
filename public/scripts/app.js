'use strict';

var app = {
  title: 'Visibility Toggle',
  visibleDetails: true
};

var appRoot = document.getElementById('app');

var onToggleDetails = function onToggleDetails() {
  app.visibleDetails = !app.visibleDetails;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    React.createElement(
      'button',
      { onClick: onToggleDetails },
      app.visibleDetails === true ? 'Hide Details' : 'Show Details'
    ),
    React.createElement(
      'p',
      null,
      app.visibleDetails === true ? 'Hey, these are some details you can now see.' : ''
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
