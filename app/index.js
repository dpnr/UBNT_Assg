var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
require('./lib/bower_components/bootstrap/dist/css/bootstrap.min.css');
require('./theme/globalStyle')
var App = require('./components/App');


ReactDOM.render(
  <App />,
  document.getElementById('app')
);