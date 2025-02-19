import React from "react";

function Button({type, handleClick, disabled, children}) {
    return (
        <button className="main-button"
        type={type}
        onClick={handleClick}
        disabled={disabled}
        >{children}
        </button>
    )
}

export default Button;