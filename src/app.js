// App

var React = require('react');
var data = require('./data');

// Testing npm debug log shit
var Bumpkit = require('bumpkit');
var Q = require('q');
var queryString = require('query-string');

var App = React.createFactory(require('./components/App.jsx'));

React.render(
  App(data),
  document.getElementById('app')
);


