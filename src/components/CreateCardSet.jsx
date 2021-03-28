import React from "react";
import Button from '@material-ui/core/Button';

const CreateCardSet = () => {
    return (

        <div className="content-header">
            <div className="create-header">
                <h2>Create a new flashcard deck</h2>
                <Button variant="contained" color="secondary">Create</Button>
            </div>
        </div>

    );

}

export default CreateCardSet;