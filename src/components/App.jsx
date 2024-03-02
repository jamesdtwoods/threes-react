import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import DrawPile from './drawPile';


function App() {
  // const deck = useSelector((store) => store.deck)
  const dispatch = useDispatch()

  const deckOfCards = [
    {
      suite: "hearts",
      value: 2,
      display: '2 of hearts',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 3,
      display: '3 of hearts',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 4,
      display: '4 of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 5,
      display: '5 of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 6,
      display: '6 of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 7,
      display: '7 of hearts',
      property: 'under',
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 8,
      display: '8 of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 9,
      display: '9 of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 10,
      display: '10 of hearts',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 11,
      display: 'J of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 12,
      display: 'Q of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 13,
      display: 'K of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "hearts",
      value: 14,
      display: 'A of hearts',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 2,
      display: '2 of diamonds',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 3,
      display: '3 of diamonds',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 4,
      display: '4 of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 5,
      display: '5 of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 6,
      display: '6 of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 7,
      display: '7 of diamonds',
      property: 'under',
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 8,
      display: '8 of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 9,
      display: '9 of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 10,
      display: '10 of diamonds',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 11,
      display: 'J of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 12,
      display: 'Q of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 13,
      display: 'K of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "diamonds",
      value: 14,
      display: 'A of diamonds',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 2,
      display: '2 of clubs',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 3,
      display: '3 of clubs',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 4,
      display: '4 of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 5,
      display: '5 of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 6,
      display: '6 of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 7,
      display: '7 of clubs',
      property: 'under',
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 8,
      display: '8 of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 9,
      display: '9 of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 10,
      display: '10 of clubs',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 11,
      display: 'J of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 12,
      display: 'Q of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 13,
      display: 'K of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "clubs",
      value: 14,
      display: 'A of clubs',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 2,
      display: '2 of spades',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 3,
      display: '3 of spades',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 4,
      display: '4 of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 5,
      display: '5 of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 6,
      display: '6 of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 7,
      display: '7 of spades',
      property: 'under',
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 8,
      display: '8 of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 9,
      display: '9 of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 10,
      display: '10 of spades',
      property: 'play on any',
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 11,
      display: 'J of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 12,
      display: 'Q of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 13,
      display: 'K of spades',
      property: null,
      pile: 'draw'
    },
    {
      suite: "spades",
      value: 14,
      display: 'A of spades',
      property: null,
      pile: 'draw'
    }
  ]
  let gamesStarted = false;
  let gameOver = false;
  let playerWon = false;
  let [dealerCards, setDealerCards] = useState([])
  let [dealerDownHiddenCards, setDealerDownHiddenCards] = useState([])
  let [dealerDownShownCards, setDealerDownShownCards] = useState([])
  let [playerCards, setPlayerCards] = useState([])
  let [playerDownHiddenCards, setPlayerDownHiddenCards] = useState([])
  let [playerDownShownCards, setPlayerDownShownCards] = useState([])
  let [playPile, setPlayPile] = useState([])
  let [drawDeck, setDrawDeck] = useState(deckOfCards)
  let discard = [];
  // shuffleDeck(deckOfCards)

  useEffect(() => {
    shuffleDeck(deckOfCards)
    // dispatch({
    //   type: 'NEW_GAME',
    //   payload: deckOfCards
    // })
  }, []);

  function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
      let swapIdx = Math.trunc(Math.random() * deck.length);
      let tmp = deck[swapIdx];
      deck[swapIdx] = deck[i];
      deck[i] = tmp;
    }
  }

  function getNextCard(pile) {
    let nextCard = drawDeck.shift()
    nextCard.pile = pile
    setDrawDeck(drawDeck)
    return nextCard
  }




  function newGame() {
    setDealerDownHiddenCards([])
    setDealerDownShownCards([])
    setDealerCards([])
    setPlayerDownHiddenCards([])
    setPlayerDownShownCards([])
    setPlayerCards([])
    setPlayPile([])
    gamesStarted = true;
    setDealerDownHiddenCards([getNextCard('dealerDownHidden'), getNextCard('dealerDownHidden'), getNextCard('dealerDownHidden')]);
    setDealerDownShownCards([getNextCard('dealerDownShown'), getNextCard('dealerDownShown'), getNextCard('dealerDownShown')]);
    setDealerCards([getNextCard('dealerHand'), getNextCard('dealerHand'), getNextCard('dealerHand')]);
    setPlayerDownHiddenCards([getNextCard('playerDownHidden'), getNextCard('playerDownHidden'), getNextCard('playerDownHidden')]);
    setPlayerDownShownCards([getNextCard('playerDownShown'), getNextCard('playerDownShown'), getNextCard('playerDownShown')]);
    setPlayerCards([getNextCard('playerHand'), getNextCard('playerHand'), getNextCard('playerHand')]);
  }

  function viewDeck() {
    console.log('drawDeck', drawDeck);
    console.log('dealerDownHiddenCards', dealerDownHiddenCards);
    console.log('dealerDownShownCards', dealerDownShownCards);
    console.log('dealerCards', dealerCards);
    console.log('playerDownHiddenCards', playerDownHiddenCards);
    console.log('playerDownShownCards', playerDownShownCards);
    console.log('playerCards', playerCards);
  }

  function playCard(card) {
    setPlayerCards(playerCards.filter((playerCard) => playerCard.display != card.display))
    setPlayPile([...playPile, card])

  }

  function drawCardButton() {
    if (playerCards.length < 3 && deckOfCards.length > 0) {
      setPlayerCards([...playerCards, getNextCard('playerHand')])
    }
  }

  function drawCard() {
    console.log('in draw card');
    if (deckOfCards.length > 0) {
      setDealerCards([...dealerCards, getNextCard('dealerHand')])
    }
  }
  function checkDealerCard() {
    let cardToPlay;
    // need multiple loops for correct logic
    // first loops checks to see if equal
    // second checks to see if greater
    // third checks for special cards
    for (let i = 0; i < dealerCards.length; i++) {
      if (dealerCards[i].value === playPile[playPile.length - 1].value) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      } else if (dealerCards[i].value > playPile[playPile.length - 1].value) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      } else if (dealerCards[i].value === 2 || dealerCards[i].value === 3 || dealerCards[i].value === 10) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      } else cardToPlay
    }
    return cardToPlay
  }

  function dealerPlay() {
    dealerCards.sort((a, b) => a.value - b.value)
    let cardToPlay = checkDealerCard()
    console.log('card to play', cardToPlay);
    console.log('dealer hand', dealerCards);
    if (cardToPlay) {
      setPlayPile([...playPile, cardToPlay])
      setDealerCards(dealerCards.filter((dealerCard) => dealerCard.display != cardToPlay.display))
      drawCard()
    } else drawCard()
  }

  function pickUp() {
    playerCards.push.apply(playerCards, playPile)
    setPlayerCards(playerCards)
    setPlayPile([])
  }

  return (
    <div>
      <h1>3s</h1>
      <button onClick={newGame}>New Game</button>
      <button onClick={viewDeck}>View Deck</button>
      <button onClick={drawCardButton}>Draw Card</button>
      <button onClick={dealerPlay}>Dealer Play</button>
      <button onClick={pickUp}>Pick Up</button>
      {/* <div><h4>Draw Pile:</h4>
        {deckOfCards.map((card) => (<p>{card.display}</p>))}
      </div> */}

      {/* <div><h4>Dealer down hidden:</h4>
        {dealerDownHiddenCards && dealerDownHiddenCards.map((card) => (<p>{card.display}</p>))}
      </div> */}
      <div><h4>Play Pile:</h4>
        {playPile && playPile.map((card) => (<p>{card.display}</p>))}
      </div>
      {/* <div><h4>Dealer down shown:</h4>
        {dealerDownShownCards && dealerDownShownCards.map((card) => (<p>{card.display}</p>))}
      </div> */}
      <div><h4>Dealer hand:</h4>
        {dealerCards && dealerCards.map((card) => (<p>{card.display}</p>))}
      </div>
      {/* <div><h4>Player down hidden:</h4>
        {playerDownHiddenCards && playerDownHiddenCards.map((card) => (<p>{card.display}</p>))}
      </div> */}
      {/* <div><h4>Player down shown:</h4>
        {playerDownShownCards && playerDownShownCards.map((card) => (<p>{card.display}</p>))}
      </div> */}
      <div><h4>Player hand:</h4>
        {playerCards && playerCards.map((card) => (<p>{card.display}<button onClick={() => playCard(card)}>Play Card</button></p>))}
      </div>
    </div>
  );
}

export default App;