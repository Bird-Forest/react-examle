import React, { Component } from 'react';
import videos from './videos.json';
import { VideoList } from './VideoList';
import { RecordPlayer } from './RecordPlayer';
import MoviesList from './MoviesList';

export default class Player extends Component {
  state = {
    selectedVideo: null,
  };
  selectVideo = link => {
    this.setState({ selectedVideo: link });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.url !== this.props.url) console.log('new url');
  //   // this.setState({ isVideoLoaded: false });
  // }

  render() {
    return (
      <div style={{ padding: 24 }}>
        <MoviesList />
        <h1>Selected video: {this.state.selectedVideo}</h1>
        <VideoList videos={videos} onSelect={this.selectVideo} />
        <RecordPlayer url={this.state.selectedVideo} />
      </div>
    );
  }
}
