'use strict';

import React from 'react';
import LinkComponent from 'components/LinkComponent';

require('styles//PinnedList.sass');

var PinnedListComponent = React.createClass({
  render: function() {
    var linkNodes = this.props.data.reverse().map(function(link) {
      return (
        <LinkComponent link={link} key={'pinned'+link[0].data.children[0].data.id} />
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

// Uncomment properties you need
// PinnedListComponent.propTypes = {};
// PinnedListComponent.defaultProps = {};

export default PinnedListComponent;
