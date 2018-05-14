import React, { Component } from "react";
import Albums from "./../albums/Albums";
import Photos from "./../photos/Photos";
import Login from "./../auth/Login";
import PrivateRoute from "./../auth/PrivateRoute";
import AdminStuff from "./../auth/AdminStuff";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    };
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleAuth() {
    this.setState({
      auth: this.props.auth
    });
  }

  render() {
    const login = () => (
      <Login auth={this.props.auth} onLoggedIn={this.handleAuth} />
    );
    return (
      <BrowserRouter>
        <div>
          <Link to={this.props.auth.state.isLoggedIn ? "/logout" : "/login"}>
            {this.props.auth.state.isLoggedIn ? "Logout" : "Login"}{" "}
          </Link>

          <Link to="/albums">Albums</Link>
          <Link to="/photos"> Photos</Link>
          <Link to="/protected">Protected</Link>
          <Route path="/albums" component={Albums} />
          <Route path="/photos" component={Photos} />
          <Route
            path="/logout"
            render={props => {
              this.props.auth.logout().then(res => {
                this.handleAuth();
                props.history.push("/login");
              });
              return <div>Loging you out</div>;
            }}
          />
          <Route path="/login" component={login} />

          <Route exact path="/albums/photos/:albumId" component={Photos} />
          <PrivateRoute
            path="/protected"
            auth={this.props.auth}
            onSecret={this.props.onSecret}
            secret={this.props.secret}
            component={AdminStuff}
          />
        </div>
      </BrowserRouter>
    );
  }
}
