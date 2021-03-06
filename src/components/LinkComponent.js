'use strict';

import React from 'react';

require('styles//Link.sass');
var $ = require('jquery')

var LinkComponent = React.createClass({
	loadLink: function() {
    if (this.props.link.kind === 't3') {
      var link = this.props.link.data.permalink;
      link = link.replace('?ref=search_posts','.json')
      $.ajax({
        url: 'https://www.reddit.com'+link,
        dataType: 'json',
        cache: false,
        success: function(data) {
          if (data !== undefined && this.isMounted()) {
            var isPinned = false;
            if (this.props.pinData.length >0) {
              for (var i=0; i < this.props.pinData.length; i++) {
                if (this.props.pinData[i] !== undefined && data[0].data.children[0].data.id === this.props.pinData[i][0].data.children[0].data.id) {
                  isPinned = true;
                  break;
                }
              }
            }
            this.setState({data: data, pinned: isPinned});
          }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(err);
        }.bind(this)
      });
    }
    else {
      if (this.isMounted()) {
        this.setState({data: this.props.link, pinned: true});
      }
    }
	},
	componentDidMount: function() {
		this.loadLink();
    // setInterval(this.loadLink, 0);
	},
	getInitialState: function() {
		return {data: [], pinned: false}
	},
  handlePin: function() {
    if (this.state.pinned) {
      this.setState({pinned: false});
      this.props.unpinLink(this.state.data);
    }
    else {
      this.setState({pinned: true});
      this.props.pinLink(this.state.data);
    }
  },
  render: function() {
  	var title = 'Loading...';
  	var url = '';
    var redditurl = '';
  	// var thumbnail = "https://36.media.tumblr.com/6ff0d5ac6f7e67417ffd33f3d0f1e209/tumblr_n0ac37myBU1s559q7o7_1280.jpg";
    var thumbnail = 'http://retreat.guru/images/placeholder-square.jpg';
  	var user = '';
  	var comment = '';
  	var score = '';

  	if (this.state.data.length !== 0) {
  		var dat = this.state.data[0].data.children[0].data;
    	title = dat.title;
    	url = dat.url;
      redditurl = 'http://reddit.com'+dat.permalink;
    	if (dat.thumbnail.indexOf('http')!==-1) {
	    	thumbnail = dat.thumbnail;
    	}

    	if (this.state.data[1].data.children.length > 0) {
    		var highest;
    		var comments = this.state.data[1].data.children;
        var highscore=0;
    		for (var i=0; i < comments.length; i++) {
    			if (comments[i].data.score > highscore) {
    				highscore = comments[i].data.score;
    				highest = comments[i].data;
    			}
    		}
    		user = highest.author;
    		comment = highest.body;
        score = '('+highest.score + ' points)';
    	}
  	}
    var pinned ='btn btn-xs btn-default pull-right';
    if (this.state.pinned) {
      pinned = pinned+' active';
    }
    return (
      <div className="link-component">
        <div className="link-image">
        	<img src={thumbnail} className="img-thumbnail link-thumbnail"/>
        </div>
        <div className="link-info">
          <button className={pinned} onClick={this.handlePin}>
            <span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
          </button>
        	<h4 className="link-title">
        		{title}&nbsp;
        	</h4>
        	<div className="link-comment">
        		<b className="username">{user}</b> <b className="score">{score}</b>
        		<p className="comment">{comment}</p>
        	</div>
          <div className="links">
            <a target="_blank" className="btn btn-md btn-default" href={redditurl}>
              <span className="glyphicon glyphicon-comment" aria-hidden="true"></span>
              Reddit Discussion
            </a> &nbsp;
            <a target="_blank" className="btn btn-md btn-default" href={url}>
              <span className="glyphicon glyphicon-link" aria-hidden="true"></span>
              Outbound Link
            </a>
          </div>
        </div>
      </div>
    );
  }
});

LinkComponent.displayName = 'LinkComponent';

// Uncomment properties you need
// LinkComponent.propTypes = {};
// LinkComponent.defaultProps = {};

export default LinkComponent;