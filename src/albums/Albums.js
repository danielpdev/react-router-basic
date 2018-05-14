import React, { Component } from "react";
import Album from "./Album";

export default class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(albums => {
        return this.setState({
          albums: albums
        });
      });
  }

  render() {
    const albums = this.state.albums.map(album => {
      return <Album key={album.id} album={album} />;
    });

    return (
      <div>
        Albums
        {albums}
      </div>
    );
  }
}
