import React from 'react';
import {connect} from "react-redux";
import {getUsersRequest} from "../actions/users";
import UsersList from "./UsersList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <UsersList users={users.items} />
      </div>
    );
  }
}

/**
 * connect()
 * arg1: State
 * arg2: Action
 */
export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest }
)(App);
