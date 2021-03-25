import React, { useState } from "react";

import Header from "./Header";

import CreateCardSet from "./CreateCardSet";
import InputCard from "./InputCard";
import InputTitle from "./InputTitle";


const App = () => {
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
        <button onClick={addCards}>addCards</button>

      </div>





    </div>
  );
}

export default App;
