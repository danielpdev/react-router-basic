import React from "react";
import { Prompt } from "react-router-dom";

export default class AdminStuff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secret: null,
      isBlocking: false
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value)
      this.setState({
        isBlocking: true
      });
  };
  handleSubmit = form => {
    form.preventDefault();
    this.props.onSecret(this.state.secret);
  };
  render() {
    const { isBlocking } = this.state;
    const preventBlockingMessage = isBlocking
      ? "Prevent closing active"
      : "Prevent closing inactive";
    return (
      <div>
        Now you cand see the secret: {this.props.secret.value}
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="secret"> Secret </label>
          <input type="text" name="secret" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <br />
          {preventBlockingMessage}
          <Prompt
            when={isBlocking}
            message={location =>
              `Are you sure you want to go to ${location.pathname}`
            }
          />
        </form>
      </div>
    );
  }
}
