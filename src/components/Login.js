import React from 'react'
import './Login.css'
import styled from 'styled-components'

function Login() {
    const handleClick=()=>{
        const clientID='1eceaf77bce048c6b8df506197c5d3c7'
        const redirectUrl="http://localhost:3000/";
        const apiurl="https://accounts.spotify.com/authorize";
        const scope=[
            "user-read-email",
             "user-read-private",
             "user-modify-playback-state",
             "user-read-playback-state",
             "user-read-recently-played",
             "user-read-currently-playing",
             "user-read-playback-position",
             "user-top-read",
        ];
        window.location.href = `${apiurl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
          )}&response_type=token&show_dialog=true`;
    }
  return (
    <container >
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"/>
        <button onClick={handleClick}>Login To Spotify</button>
    </container>
  )
}

export default Login