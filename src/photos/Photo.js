import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Photo extends Component {
  componentWillMount() {
    if (this.props.photo) {
      const photo = this.props.photo;
      this.setState({
        albumId: photo.albumId,
        id: photo,
        title: photo.title,
        url: photo.url,
        thumbnailUrl: photo.thumbnailUrl
      });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      albumId: null,
      id: null,
      title: null,
      url: null,
      thumbnailUrl: null
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <img src={this.state.url} />
        <Link to="/albums">Albums</Link>
      </div>
    );
  }
}
