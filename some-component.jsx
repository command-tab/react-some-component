/** @jsx React.DOM */

'use strict';

var React = require('react');
var SomeComponent = React.createClass({
  displayName: 'SomeComponent',
  doSomething: function (e) {
    console.log('did something');
  },
  render: function () {
    return (
      /* jshint ignore:start */
      <div onClick={this.doSomething}>Do Something</div>
      /* jshint ignore:end */
    );
  }
});

module.exports = SomeComponent;
