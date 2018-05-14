import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.state.username === "test") {
      this.props.auth.login().then(res => {
        this.props.onLoggedIn();
      });
    }
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username for login is 'test' "
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
