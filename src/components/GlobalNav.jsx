/** @jsx React.DOM */

var React = require('react');
var Navbar = require('react-bootstrap/Navbar');
var Nav = require('react-bootstrap/Nav');
var NavItem = require('react-bootstrap/NavItem');
var DropdownButton = require('react-bootstrap/DropdownButton');
var MenuItem = require('react-bootstrap/MenuItem');

module.exports = React.createClass({


  render: function() {
    return (
      <Navbar inverse={true} staticTop={true} fluid={true}>
        <Nav>
          <a className="navbar-brand" href="#">{this.props.name}</a>
          <NavItem href="#">Nav Item</NavItem>
        </Nav>
        <Nav right={true}>
          <NavItem href="#">QA</NavItem>
          <DropdownButton eventKey={3} title="Brent Jackson">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem>Separated link</MenuItem>
          </DropdownButton>
        </Nav>
        <form className="navbar-form navbar-right" role="search">
          <label className="sr-only">Search</label>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Search"/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-default">Go</button>
            </span>
          </div>
        </form>
      </Navbar>
    )
  }

});

