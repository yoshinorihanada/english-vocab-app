import React, { useState } from "react";

import Header from "./Header";

import CreateCardSet from "./CreateCardSet";
import InputCard from "./InputCard";
import InputTitle from "./InputTitle";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'



const App = () => {
  const useStyles = makeStyles({
    root: {
      margin: "auto"

    },
  });

  const classes = useStyles();

  const [cards, setCards] = useState([
    
  ]);
  


  const addCards = (newCard) => {
    setCards(prevCards => {
      return [...prevCards, newCard]
    })

  }

  const deleteCard = (id) => {
    setCards(prevCards => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
      <Header />

      <div className="content-wrapper">
        <form>
          <CreateCardSet />
          <InputTitle />
          
          {cards.map((cardItem, index) => {
            
            return (
              <InputCard
                key={index}
                id={index}
                onDelete={deleteCard} />
            );
          })}
          
        </form>
        
        <div className='add-button'>
          <Button className={classes.root} variant="contained" color="secondary" onClick={addCards}>+ addCards</Button>
        </div>
        
        
        
        
        

      </div>





    </div>
  );
}

export default App;
