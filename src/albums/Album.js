import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Album extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      id: null,
      title: null
    };
  }

  componentWillMount() {
    const album = this.props.album;
    this.setState({
      userId: album.userId,
      id: album.id,
      title: album.title
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <Link to={`/albums/photos/${this.state.id}`}> Go To photos </Link>
      </div>
    );
  }
}
