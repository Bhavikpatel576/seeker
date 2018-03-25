import React, { Component } from 'react';
import Sound from 'react-sound';

class Sound extends Component {
  render() {
    return (
      <Sound
        url='./beam.mp3'
        playStatus={Sound.status.PLAYING}
        onLoading={this.handleSongLoading}
        onPlaying={this.handleSongPlaying}
        onFinishedPlaying={this.handleSongFinishedPlaying}
      />
    );
  }
}

export default Sound;
