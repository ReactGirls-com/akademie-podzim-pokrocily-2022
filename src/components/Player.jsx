import React from 'react';
import ReactPlayer from 'react-player';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

export function Player(props) {
  if (props.spotifyUrl) {
    return (
      <SpotifyPlayer
        uri={props.spotifyUrl}
        size={size}
        view={view}
        theme={theme}
      />
    );
  }
  return <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;
}
