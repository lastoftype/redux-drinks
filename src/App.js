import React, { Component } from 'react';
import { connect } from 'react-redux';

import DevTools from './DevTools';

// Redux
import { getSpaceships, setUsers, setLoading } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.getSpaceships();
  }

  render() {
    return (
      <div className="App">
        <pre style={{ background: '#222', color: '#efefef', margin: '0', padding: '20px', fontSize: '20px' }}>
          {JSON.stringify(this.props, null, ' ')}
        </pre>
        <DevTools />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = { setUsers, setLoading, getSpaceships };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
