'use strict';

import React from 'react';
import LinkComponent from 'components/LinkComponent';

require('styles//LinkList.sass');

var LinkListComponent = React.createClass({
  render: function() {
    var that = this.props;
    var linkNodes = that.data.reverse().map(function(link) {
      return (
        <LinkComponent link={link} key={link.data.id} pinLink={that.pinLink}/>
      );
    })
    return (
      this.props.data.length !==0 ?
        <div className="linklist-component">
          <h4 className="results-header">Search Results</h4>
            {linkNodes}
        </div>
      : <div></div>
    );
  }
});

LinkListComponent.displayName = 'LinkListComponent';

// Uncomment properties you need
// LinkListComponent.propTypes = {};
// LinkListComponent.defaultProps = {};

export default LinkListComponent;