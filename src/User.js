import React from 'react';
import { connect } from 'react-redux';

// Redux actions
import { setUser } from './store';

const User = props => {
  return (
    <div className={props.activeUser.id === props.id ? 'User --active' : 'User'}>
      <img alt={props.name} src={`https://api.adorable.io/avatars/${props.id}/${props.name}.png`} />
      <button onClick={() => props.setUser({ name: props.name, id: props.id, email: props.email })}>
        Select {props.name.split(' ')[0]}
      </button>
    </div>
  );
};

const mapStateToProps = ({ activeUser }) => ({ activeUser });
const mapDispatchToProps = { setUser };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
