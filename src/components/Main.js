require('normalize.css');
require('styles/App.css');
require('jquery');

import React from 'react';
import LinkBoxComponent from 'components/LinkBoxComponent';

class AppComponent extends React.Component {
  render() {
    return (
      <LinkBoxComponent pollInterval={30000} />
    );
  }
}


AppComponent.defaultProps = {
};

export default AppComponent;