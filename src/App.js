import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

let fakeServerData = {
  user: {
    name: 'liam',
    playlists : [
      {
        name: 'Favs',
        songs: [
          {name: 'Beat It', duration: 1345},
          {name: 'Say Something', duration: 1236},
          {name: 'Hurt', duration: 70000}
        ]
      },
      {
        name: 'Discover Weekly',
        songs: [
          {name: 'the song', duration: 3456},
          {name: 'le song', duration: 5647},
          {name: 'de song', duration:6543}
        ]
      },
      {
        name: 'Playlist #3',
        songs: [
          { name: 'the song', duration: 3456 },
          { name: 'le song', duration: 5647 },
          { name: 'de song', duration: 6543 }
        ]
      },
      {
        name: 'Worst Playlist!',
        songs: [
          { name: 'the song', duration: 3456 },
          { name: 'le song', duration: 5647 },
          { name: 'de song', duration: 6543 }
        ]
      }
    ]
  }
};

class App extends Component {

  constructor() {
    super();
    this.state = {serverData: {}}
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 1000); 
  }
  render() {
    return (
      <div className="App">
        {
          this.state.serverData.user ?
          <div>
            <h1>{this.state.serverData.user.name}'s Playlists</h1>
            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HourCounter playlists={this.state.serverData.user.playlists} />

            <Filter />

            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
          </div> : <h1>Loading...</h1>
        }
      </div>
    );
  }
}

class PlaylistCounter extends Component {
  render() {
    return (
      <div className="aggregate">
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HourCounter extends Component {
  render() {

    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)

    return (
      <div className="aggregate">
        <h2>{Math.round(totalDuration/60/60)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <img className="filterImg"/>
        <input type="text" />
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div className="playlist">
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

export default App;
