import React from "react";

const InputCard = (props) => {
    function handleClick(event) {
        props.onDelete(props.id);
        event.preventDefault();
    }
    return (
        <div className="input-card">
            
            <input
                name="term"
                placeholder='Term'
            />
            <input
                name="definition"
                placeholder='Definition'
            />
            <button onClick={handleClick}>DELETE</button>
        
            
        </div>
    );
}

export default InputCard;