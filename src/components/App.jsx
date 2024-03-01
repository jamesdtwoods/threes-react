import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const drawDeck = useSelector((store) => store.deck)
  const dispatch = useDispatch()

  const deckOfCards = [
    {
      suite: "hearts",
      value: 2,
      display: '2 of hearts',
      property: 'play on any'
    },
    {
      suite: "hearts",
      value: 3,
      display: '3 of hearts',
      property: 'play on any'
    },
    {
      suite: "hearts",
      value: 4,
      display: '4 of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 5,
      display: '5 of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 6,
      display: '6 of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 7,
      display: '7 of hearts',
      property: 'under'
    },
    {
      suite: "hearts",
      value: 8,
      display: '8 of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 9,
      display: '9 of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 10,
      display: '10 of hearts',
      property: 'play on any'
    },
    {
      suite: "hearts",
      value: 11,
      display: 'J of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 12,
      display: 'Q of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 13,
      display: 'K of hearts',
      property: null
    },
    {
      suite: "hearts",
      value: 14,
      display: 'A of hearts',
      property: null
    },
    {
      suite: "diamonds",
      value: 2,
      display: '2 of diamonds',
      property: 'play on any'
    },
    {
      suite: "diamonds",
      value: 3,
      display: '3 of diamonds',
      property: 'play on any'
    },
    {
      suite: "diamonds",
      value: 4,
      display: '4 of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 5,
      display: '5 of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 6,
      display: '6 of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 7,
      display: '7 of diamonds',
      property: 'under'
    },
    {
      suite: "diamonds",
      value: 8,
      display: '8 of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 9,
      display: '9 of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 10,
      display: '10 of diamonds',
      property: 'play on any'
    },
    {
      suite: "diamonds",
      value: 11,
      display: 'J of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 12,
      display: 'Q of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 13,
      display: 'K of diamonds',
      property: null
    },
    {
      suite: "diamonds",
      value: 14,
      display: 'A of diamonds',
      property: null
    },
    {
      suite: "clubs",
      value: 2,
      display: '2 of clubs',
      property: 'play on any'
    },
    {
      suite: "clubs",
      value: 3,
      display: '3 of clubs',
      property: 'play on any'
    },
    {
      suite: "clubs",
      value: 4,
      display: '4 of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 5,
      display: '5 of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 6,
      display: '6 of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 7,
      display: '7 of clubs',
      property: 'under'
    },
    {
      suite: "clubs",
      value: 8,
      display: '8 of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 9,
      display: '9 of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 10,
      display: '10 of clubs',
      property: 'play on any'
    },
    {
      suite: "clubs",
      value: 11,
      display: 'J of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 12,
      display: 'Q of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 13,
      display: 'K of clubs',
      property: null
    },
    {
      suite: "clubs",
      value: 14,
      display: 'A of clubs',
      property: null
    },
    {
      suite: "spades",
      value: 2,
      display: '2 of spades',
      property: 'play on any'
    },
    {
      suite: "spades",
      value: 3,
      display: '3 of spades',
      property: 'play on any'
    },
    {
      suite: "spades",
      value: 4,
      display: '4 of spades',
      property: null
    },
    {
      suite: "spades",
      value: 5,
      display: '5 of spades',
      property: null
    },
    {
      suite: "spades",
      value: 6,
      display: '6 of spades',
      property: null
    },
    {
      suite: "spades",
      value: 7,
      display: '7 of spades',
      property: 'under'
    },
    {
      suite: "spades",
      value: 8,
      display: '8 of spades',
      property: null
    },
    {
      suite: "spades",
      value: 9,
      display: '9 of spades',
      property: null
    },
    {
      suite: "spades",
      value: 10,
      display: '10 of spades',
      property: 'play on any'
    },
    {
      suite: "spades",
      value: 11,
      display: 'J of spades',
      property: null
    },
    {
      suite: "spades",
      value: 12,
      display: 'Q of spades',
      property: null
    },
    {
      suite: "spades",
      value: 13,
      display: 'K of spades',
      property: null
    },
    {
      suite: "spades",
      value: 14,
      display: 'A of spades',
      property: null
    }
  ]

  useEffect(() => {
    shuffleDeck(deckOfCards)
    dispatch({
      type: 'NEW_GAME',
      payload: deckOfCards
    })
  }, []);

  function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let swapIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[swapIdx];
      deck[swapIdx] = deck[i];
      deck[i] = tmp;
    }
  }

  function newGame() {

  }

  function viewDeck() {
    console.log('deck from store', drawDeck);
  }

  return (
    <div>
      <h1>Redux Airport</h1>
      <input placeholder='Airline Name' />
      <button onClick={newGame}>New Game</button>
      <button onClick={viewDeck}>View Deck</button>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;