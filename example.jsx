(function() {
  'use strict';
  var React = require('react');
  var SomeComponent = require('./some-component.jsx');
  React.render(
    /* jshint ignore:start */
    <SomeComponent/>,
    document.body
    /* jshint ignore:end */
  );
})();
