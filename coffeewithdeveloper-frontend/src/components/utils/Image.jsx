import React from "react";

const Image = (props) => {
    return (
        <>
            <img src={props.path} alt={props.alt} className={props.className} />
        </>
    );
}

export default Image;