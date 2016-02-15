'use strict';

import React from 'react';

require('styles//LinkSearch.sass');

var LinkSearchComponent = React.createClass({  
  handleSubmit: function() {
    this.props.onUserSubmit(this.refs.query.value);
  },
  render: function() {
    return (
      <div className="linksearch-component">
        <h4>Reddit Search</h4>
          <input className="form-control" type="text" ref="query" />
          <button className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
});

LinkSearchComponent.displayName = 'LinkSearchComponent';

// Uncomment properties you need
// LinkSearchComponent.propTypes = {};
// LinkSearchComponent.defaultProps = {};

export default LinkSearchComponent;
