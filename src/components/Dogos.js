import React from "react";

function Dogos(props) {
    return(
        <div className="dog">
            <img src={props.dogImg.message} alt="" />
        </div>
    )
}

export default Dogos