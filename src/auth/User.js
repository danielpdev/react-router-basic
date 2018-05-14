import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: null
    };
  }

  render() {
    return <div>User</div>;
  }
}
