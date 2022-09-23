import React, { useState } from 'react';
import './App.css';
import Giphy from './components/Giphy';
import Gifs from './components/Gifs';
import Button from './components/Button';
import ButtonDogos from './components/ButtonDogos';
import Dogos from './components/Dogos';

function App() {

  // Giphy
  const [gifUrl, setGifUrl] = React.useState({});

  const handleSubmit = async () => {
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=&rating=g`

    let res = await fetch(gifUrl);
    let data = await res.json();
    // console.log(data.data.images.fixed_height)
    setGifUrl(data.data.images.fixed_height)

  }
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
      <Button handleSubmitFromApp={handleSubmit} />
      {gifUrl.url ?
        <Gifs gifUrl={gifUrl} />
        :
        <h2>Get random gifs from Giphy</h2>}
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
