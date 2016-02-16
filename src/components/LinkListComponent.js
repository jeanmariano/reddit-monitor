'use strict';

import React from 'react';
import LinkComponent from 'components/LinkComponent';

require('styles//LinkList.sass');

var LinkListComponent = React.createClass({
  render: function() {
    var that = this.props;
    var linkNodes = that.data.map(function(link,i) {
      return (
        <LinkComponent link={link}
          key={i}
          pinData={that.pinData}
          pinLink={that.pinLink}
          unpinLink={that.unpinLink} />
      );
    })
    return (
      <div className="linklist-component">
        <h4 className="results-header">Search Results</h4>
          {this.props.data.length !==0 ? linkNodes : 'Search to get started.'}
      </div>
    );
  }
});

LinkListComponent.displayName = 'LinkListComponent';

export default LinkListComponent;