import React, { useState } from 'react';
import './App.css';
import Giphy from './components/Giphy';
import Main from './components/Main';
import ButtonDogos from './components/ButtonDogos';
import Dogos from './components/Dogos';

function App() {

  // Dogos  
  const [dogImg, setDogImg] = React.useState({});

  const handleSubmitDog = async () => {
    const dogUrl = "https://dog.ceo/api/breeds/image/random";
    let res = await fetch(dogUrl);
    let data = await res.json();

    setDogImg(data)
  }
  return (
    <div className="App">
      <Giphy />
      <Main />
      <h1>Dogos</h1>
      <ButtonDogos handleSubmitFromApp={handleSubmitDog} />
      {dogImg.message ?
        <Dogos dogImg={dogImg} />
        :
        <h2>Get Random Dogs from Dog API</h2>}
    </div>
  );
}

export default App;
