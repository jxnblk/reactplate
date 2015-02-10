/** @jsx React.DOM */

var React = require('react');
var GlobalNav = require('./GlobalNav.jsx');
var Footer = require('./Footer.jsx');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <GlobalNav {...this.props} />
        <Footer {...this.props} />
      </div>
    )
  }

});

