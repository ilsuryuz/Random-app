import React from "react";

function ButtonDogos(props) {
    const handleSubmit =(event) => {
        event.preventDefault();

        props.handleSubmitFromApp();
    }

    return (
        <button type="button" onClick={handleSubmit}>
            Random Dog
        </button>
    )
}

export default ButtonDogos;