'use strict';

import React from 'react';
import LinkComponent from 'components/LinkComponent';

require('styles//PinnedList.sass');

var PinnedListComponent = React.createClass({
  render: function() {
    var that = this.props;
    var linkNodes = this.props.data.map(function(link,i) {
      return (
        <LinkComponent
          link={link}
          key={i}
          // key={'pinned'+link[0].data.children[0].data.id}
          pinData={that.pinData}
          pinLink={that.pinLink}
          unpinLink={that.unpinLink} />
      );
    })
    return (
      <div className="pinnedlist-component">
          <h4 className="results-header">Pinned Links</h4>
          {this.props.data.length > 0 ? linkNodes : 'No pinned links.'}
      </div>
    );
  }
});

PinnedListComponent.displayName = 'PinnedListComponent';

export default PinnedListComponent;
