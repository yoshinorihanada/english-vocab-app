import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

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
            <button clasName="deleteBtn" onClick={handleClick}><DeleteIcon></DeleteIcon></button>
        
            
        </div>
    );
}

export default InputCard;