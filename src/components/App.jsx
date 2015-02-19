/** @jsx React.DOM */

var React = require('react');
var GlobalNav = require('./GlobalNav.jsx');
var Footer = require('./Footer.jsx');

var Geomicon = require('../../../react-geomicons');

module.exports = React.createClass({

  render: function() {
    return (
      <div>
        <GlobalNav {...this.props} />
        <h1>Reactplate</h1>
        <Geomicon icon="play" className="h3" />
        <Geomicon icon="pause" className="h1 text-success" />
        <Geomicon icon="cog" fill="#f00" />
        <Geomicon icon="heart" />
      </div>
    )
  }

});

