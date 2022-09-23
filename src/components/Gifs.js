import React from "react";

function Gifs(props) {
    return(
        <div className="gif">
            <img src={props.gifUrl.url} alt="" />
        </div>
    )
}

export default Gifs