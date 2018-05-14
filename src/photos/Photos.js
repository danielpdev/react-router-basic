import React, { Component } from "react";
import Photo from "./Photo";

export default class Photos extends Component {
  componentWillMount() {
    const albumId = this.props.match.params.albumId;
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(photos => {
        return this.setState({
          photos: albumId
            ? photos.reduce((arr, curr) => {
                if (curr.albumId === parseInt(albumId)) arr.push(curr);
                return arr;
              }, [])
            : photos
        });
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  render() {
    const photos = this.state.photos.map(photo => {
      return <Photo key={photo.id} photo={photo} />;
    });
    return (
      <div>
        Photos
        {photos}
      </div>
    );
  }
}
