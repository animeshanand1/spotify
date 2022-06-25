import React,{useEffect} from 'react';
import './App.css';
import { StateProvider, useStateProvider } from './utils/StateProvider';
import {initialState} from './utils/reducer'
import Login from './components/Login';
import Spotify from './components/Spotify';
import { reducerCases } from './utils/Constants';
function App() {
  // const [{token},dispatch]=useStateProvider();
  // useEffect(() => {
  //   const hash=window.location.hash
  //   if (hash){
  //     const token= hash.substring(1).split('&')[0].split('=')[1];
  //     dispatch({action:reducerCases.SET_TOKEN, token});
  //   }
  // }, [])
  // const [{ token }, dispatch] = useStateProvider();
  // useEffect(() => {
  //   const hash = window.location.hash;
  //   if (hash) {
  //     const token = hash.substring(1).split("&")[0].split("=")[1];
  //     if (token) {
  //       dispatch({ type: reducerCases.SET_TOKEN, token });
  //     }
  //   }
  //   document.title = "Spotify";
  // }, [dispatch, token]);
  
  return (
    <div className="App">
      <StateProvider initialState={initialState}>
        <Login/>
      {/* { token ? <Spotify/>:<Login/>} */}
      </StateProvider>
    </div>
  );
}

export default App;
