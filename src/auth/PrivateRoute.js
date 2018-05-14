import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class PrivateRoute extends Component {
  render() {
    const { path, component: Component, auth } = this.props;
    return (
      <Route
        path={path}
        render={props => {
          const allowed = auth && auth.state.isLoggedIn;
          if (!allowed) return <div>You need to login</div>;
          if (allowed) return <Component {...this.props} />;
        }}
      />
    );
  }
}
