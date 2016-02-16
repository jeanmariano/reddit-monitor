'use strict';

import React from 'react';

require('styles//LinkSearch.sass');

var LinkSearchComponent = React.createClass({
  handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      this.handleSubmit();
    }
  },
  handleSubmit: function() {
    this.props.onUserSubmit(this.refs.query.value);
  },
  render: function() {
    return (
      <div className="linksearch-component">
        <h4>Reddit Search</h4>
        <div className="inner-addon right-addon">
          <i className="glyphicon glyphicon-search" onClick={this.handleSubmit}></i>
          <input ref="query" type="text" className="form-control" onKeyPress={this.handleKeyPress}/>
        </div>
      </div>
    );
  }
});

LinkSearchComponent.displayName = 'LinkSearchComponent';

export default LinkSearchComponent;
