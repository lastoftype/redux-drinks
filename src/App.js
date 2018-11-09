import React, { Component } from 'react';
import DevTools from './DevTools';
import User from './User';
import users from './users';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="UserGrid">
          {users.map((user, i) => (
            <User id={user.id} key={i} name={user.name} email={user.email} />
          ))}
        </section>
        <DevTools />
      </div>
    );
  }
}

export default App;
