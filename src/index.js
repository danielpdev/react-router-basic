import React, { Component } from "react";
import { render } from "react-dom";
import { Route, Switch, HashRouter } from "react-router-dom";
import Home from "./home/Home";
import FakeLogin from "./auth/fakeAuth";

class App extends Component {
  constructor() {
    super();
    this.state = {
      auth: new FakeLogin(),
      secret: {
        value: "big secret"
      }
    };
  }

  handleSecret = newSecret => {
    this.setState({
      secret: {
        value: newSecret
      },
      auth: this.state.auth
    });
  };

  render() {
    const home = () => (
      <Home
        auth={this.state.auth}
        secret={this.state.secret}
        onSecret={this.handleSecret}
      />
    );
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route render={() => <div> no match found</div>} />
        </Switch>
      </HashRouter>
    );
  }
}

render(<App />, document.getElementById("root"));
