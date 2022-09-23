import React from "react";
import Gifs from "./Gifs";
import Button from "./Button";

function Main(props) {
    const [gifUrl, setGifUrl] = React.useState({});

  const handleSubmit = async () => {
    const gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_API_KEY}&tag=&rating=g`

    let res = await fetch(gifUrl);
    let data = await res.json();
    // console.log(data.data.images.fixed_height)
    setGifUrl(data.data.images.fixed_height)

  }
  
    return (
        <>
            <Button handleSubmitFromApp={handleSubmit} />
            {
                gifUrl.url ?
                    <Gifs gifUrl={gifUrl} />
                    :
                    <h2>Get random gifs from Giphy</h2>
            }
        </>
    )
}
export default Main