import React, { Component } from 'react';
import { connect } from 'react-redux';

import DevTools from './DevTools';
import User from './User';

// Redux
import { setUsers, setLoading } from './store';

class App extends Component {
  componentDidMount() {
    this.props.setLoading(true);
    fetch('http://localhost:4000/users')
      .then(response => response.json())
      .then(users => {
        this.props.setUsers(users);
        this.props.setLoading(false);
      });
  }

  render() {
    return (
      <div className="App">
        {this.props.loading === true ? (
          <div className="loading">LOADING...</div>
        ) : (
          <section className="UserGrid">
            {this.props.users.map((user, i) => (
              <User id={user.id} key={i} name={user.name} email={user.email} />
            ))}
          </section>
        )}
        <DevTools />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser,
  users: state.users,
  loading: state.loading,
});

const mapDispatchToProps = { setUsers, setLoading };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
