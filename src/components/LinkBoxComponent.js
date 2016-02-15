'use strict';

import React from 'react';
import LinkListComponent from 'components/LinkListComponent';
import PinnedListComponent from 'components/PinnedListComponent';
import LinkSearchComponent from 'components/LinkSearchComponent';

require('styles//LinkBox.sass');
var $ = require('jquery')

var LinkBoxComponent = React.createClass({
  componentDidMount: function() {
    this.searchReddit();
    setInterval(this.searchReddit, this.props.pollInterval);
  },
  getInitialState: function() {
    return {pinned: [], data: [], query: ''};
  },  
  handleUserSubmit: function(text) {
    this.setState({query: text});
    setTimeout(this.searchReddit,500);
  },
  pinLink: function(link) {    
    this.state.pinned.push(link);
  },
  searchReddit: function() {
    console.log('searching!!!')
    if (this.state.query !== '') {
      this.setState({data:[]});
      $.ajax({
        url: 'https://www.reddit.com/search.json?q='+this.state.query,
        dataType: 'json',
        cache: false,
        success: function(data) {
          if (data !== undefined && this.isMounted()) {
            this.setState({data: data.data.children});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err);
        }.bind(this)
      });
    }
    else {
      console.log('no query yet');
    }
  },
  render: function() {
    return (
      <div className="linkbox-component row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <LinkSearchComponent onUserSubmit={this.handleUserSubmit} onUserInput={this.handleUserInput} />
        </div>
        <div className="col-md-7">
          <PinnedListComponent data={this.state.pinned} />
          <LinkListComponent data={this.state.data} pinLink={this.pinLink}/>
        </div>
        <div className="col-md-1"></div>
      </div>
    );
  }
});

LinkBoxComponent.displayName = 'LinkBoxComponent';

// Uncomment properties you need
// LinkBoxComponent.propTypes = {};
// LinkBoxComponent.defaultProps = {};

export default LinkBoxComponent;
