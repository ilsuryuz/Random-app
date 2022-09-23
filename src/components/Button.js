import React from "react";

function Button(props) {
    const handleSubmit =(event) => {
        event.preventDefault();

        props.handleSubmitFromApp();
    }

    return (
        <button type="button" onClick={handleSubmit}>
            Random Gif
        </button>
    )
}

export default Button;