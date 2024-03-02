import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
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
      pile: 'draw',
      front_img: 'cardPictures/2_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 3,
      display: '3 of hearts',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/3_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 4,
      display: '4 of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/4_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 5,
      display: '5 of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/5_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 6,
      display: '6 of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/6_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 7,
      display: '7 of hearts',
      property: 'under',
      pile: 'draw',
      front_img: 'cardPictures/7_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 8,
      display: '8 of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/8_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 9,
      display: '9 of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/9_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 10,
      display: '10 of hearts',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/10_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 11,
      display: 'J of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/jack_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 12,
      display: 'Q of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/queen_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 13,
      display: 'K of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/king_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "hearts",
      value: 14,
      display: 'A of hearts',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/ace_of_hearts.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 2,
      display: '2 of diamonds',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/2_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 3,
      display: '3 of diamonds',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/3_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 4,
      display: '4 of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/4_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 5,
      display: '5 of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/5_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 6,
      display: '6 of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/6_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 7,
      display: '7 of diamonds',
      property: 'under',
      pile: 'draw',
      front_img: 'cardPictures/7_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 8,
      display: '8 of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/8_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 9,
      display: '9 of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/9_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 10,
      display: '10 of diamonds',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/10_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 11,
      display: 'J of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/jack_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 12,
      display: 'Q of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/queen_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 13,
      display: 'K of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/king_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "diamonds",
      value: 14,
      display: 'A of diamonds',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/ace_of_diamonds.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 2,
      display: '2 of clubs',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/2_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 3,
      display: '3 of clubs',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/3_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 4,
      display: '4 of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/4_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 5,
      display: '5 of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/5_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 6,
      display: '6 of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/6_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 7,
      display: '7 of clubs',
      property: 'under',
      pile: 'draw',
      front_img: 'cardPictures/7_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 8,
      display: '8 of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/8_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 9,
      display: '9 of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/9_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 10,
      display: '10 of clubs',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/10_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 11,
      display: 'J of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/jack_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 12,
      display: 'Q of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/queen_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 13,
      display: 'K of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/king_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "clubs",
      value: 14,
      display: 'A of clubs',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/ace_of_clubs.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 2,
      display: '2 of spades',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/2_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 3,
      display: '3 of spades',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/3_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 4,
      display: '4 of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/4_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 5,
      display: '5 of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/5_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 6,
      display: '6 of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/6_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 7,
      display: '7 of spades',
      property: 'under',
      pile: 'draw',
      front_img: 'cardPictures/7_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 8,
      display: '8 of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/8_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 9,
      display: '9 of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/9_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 10,
      display: '10 of spades',
      property: 'play on any',
      pile: 'draw',
      front_img: 'cardPictures/10_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 11,
      display: 'J of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/jack_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 12,
      display: 'Q of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/queen_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 13,
      display: 'K of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/king_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
    },
    {
      suite: "spades",
      value: 14,
      display: 'A of spades',
      property: null,
      pile: 'draw',
      front_img: 'cardPictures/ace_of_spades.png',
      back_img: 'cardPictures/back_of_card.png'
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
  let [drawDeck, setDrawDeck] = useState([])
  let [discardPile, setDiscardPile] = useState([])
  let [hidden, setHidden] = useState(true)

  // shuffleDeck(deckOfCards)

  useEffect(() => {
    shuffleDeck(deckOfCards)
    setDrawDeck(deckOfCards)
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
    if (drawDeck.length > 0) {
      let nextCard = drawDeck.shift()
      nextCard.pile = pile
      setDrawDeck(drawDeck)
      return nextCard
    }

  }

  function newGame() {
    // need a way to reset deck
    setDealerDownHiddenCards([])
    setDealerDownShownCards([])
    setDealerCards([])
    setPlayerDownHiddenCards([])
    setPlayerDownShownCards([])
    setPlayerCards([])
    setPlayPile([])
    setDealerDownHiddenCards([getNextCard('dealerDownHidden'), getNextCard('dealerDownHidden'), getNextCard('dealerDownHidden')]);
    setDealerDownShownCards([getNextCard('dealerDownShown'), getNextCard('dealerDownShown'), getNextCard('dealerDownShown')]);
    setDealerCards([getNextCard('dealerHand'), getNextCard('dealerHand'), getNextCard('dealerHand')]);
    setPlayerDownHiddenCards([getNextCard('playerDownHidden'), getNextCard('playerDownHidden'), getNextCard('playerDownHidden')]);
    setPlayerDownShownCards([getNextCard('playerDownShown'), getNextCard('playerDownShown'), getNextCard('playerDownShown')]);
    setPlayerCards([getNextCard('playerHand'), getNextCard('playerHand'), getNextCard('playerHand')]);
  }

  function viewDeck() {
    console.log('deck of cards', deckOfCards);
    console.log('drawDeck', drawDeck);
    console.log('dealerDownHiddenCards', dealerDownHiddenCards);
    console.log('dealerDownShownCards', dealerDownShownCards);
    console.log('dealerCards', dealerCards);
    console.log('playerDownHiddenCards', playerDownHiddenCards);
    console.log('playerDownShownCards', playerDownShownCards);
    console.log('playerCards', playerCards);
  }

  function playCard(card) {
    gamesStarted = true;
    if (checkLogic(card)) {
      let updatedHand = playerCards.filter((playerCard) => playerCard.display != card.display)
      if (updatedHand.length < 3 && drawDeck.length > 0) {
        setPlayerCards([...updatedHand, getNextCard('playerHand')])
      } else if (updatedHand.length < 3 && drawDeck.length === 0) {
        setPlayerCards(updatedHand)
      }
      if (updatedHand.length >= 3) {
        setPlayerCards(updatedHand)
      }
      if (card.value === 3) {
        setDiscardPile([...discardPile, card]),
        dealerCards.push.apply(dealerCards, playPile)
        setDealerCards(dealerCards)
        setPlayPile([])
      } else if (card.value === 10) {
        discardPile.push.apply(discardPile, playPile),
        setDiscardPile(discardPile),
        setPlayPile([])
      } else setPlayPile([...playPile, card])
    } else alert('cant play that')
  }

  function drawCardButton() {
    if (playerCards.length < 3 && deckOfCards.length > 0) {
      setPlayerCards([...playerCards, getNextCard('playerHand')])
    }
  }

  function drawCard() {
    console.log('in draw card');
    if (drawDeck.length > 0) {
      setDealerCards([...dealerCards, getNextCard('dealerHand')])
    }
  }

  // returns a valid card object if dealer has cards to play, otherwise returns undefined
  function checkDealerCard() {
    let cardToPlay;
    if (playPile.length === 0) {
      // loop over to find the best card to play??
      for (let i = 0; i < dealerCards.length; i++) {
        if (dealerCards[i].value != 2 && dealerCards[i].value != 3 && dealerCards[i].value != 10) {
          cardToPlay = dealerCards[i]
          return cardToPlay
        }
      }
      for (let i = 0; i < dealerCards.length; i++) {
        if (dealerCards[i].value = 2) {
          cardToPlay = dealerCards[i]
          return cardToPlay
        }
      }
      for (let i = 0; i < dealerCards.length; i++) {
        if (dealerCards[i].value = 10) {
          cardToPlay = dealerCards[i]
          return cardToPlay
        }
      }
      for (let i = 0; i < dealerCards.length; i++) {
        if (dealerCards[i].value = 3) {
          cardToPlay = dealerCards[i]
          return cardToPlay
        }
      }
      return cardToPlay
    }
    if (playPile[playPile.length - 1].value === 7) {
      for (let i = 0; i < dealerCards.length; i++) {
        if (dealerCards[i].value <= 7) {
          cardToPlay = dealerCards[i]
          return cardToPlay
        } else dealerPickUp()
      }
    }
    for (let i = 0; i < dealerCards.length; i++) {
      if (dealerCards[i].value === playPile[playPile.length - 1].value) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      }
    }
    for (let i = 0; i < dealerCards.length; i++) {
      if (dealerCards[i].value > playPile[playPile.length - 1].value) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      }
    }
    for (let i = 0; i < dealerCards.length; i++) {
      if (dealerCards[i].value === 2 || dealerCards[i].value === 3 || dealerCards[i].value === 10) {
        cardToPlay = dealerCards[i]
        return cardToPlay
      }
    }
    return cardToPlay
  }

  function dealerPlay() {
    dealerCards.sort((a, b) => a.value - b.value)
    let cardToPlay = checkDealerCard()
    // if cardToPlay is defined, play the card, else draw
    if (cardToPlay) {
      let updatedHand = dealerCards.filter((dealerCard) => dealerCard.display != cardToPlay.display)
      if (cardToPlay.value === 3) {
        if (updatedHand.length < 3) {
          return (
            playerCards.push.apply(playerCards, playPile),
            setPlayerCards(playerCards),
            setPlayPile([]),
            setDiscardPile([...discardPile, cardToPlay]),
            setDealerCards([...updatedHand, getNextCard('dealerHand')])
          )
        } else return (
          playerCards.push.apply(playerCards, playPile),
          setPlayerCards(playerCards),
          setPlayPile([]),
          setDealerCards(updatedHand)
        )
      }
      if (cardToPlay.value === 10) {
        if (updatedHand.length < 3) {
          return (
            discardPile.push.apply(discardPile, playPile),
            setDiscardPile(discardPile),
            setPlayPile([]),
            setDealerCards([...updatedHand, getNextCard('dealerHand')])
          )
        } else return (
          discardPile.push.apply(discardPile, playPile),
          setDiscardPile(discardPile),
          setPlayPile([]),
          setDealerCards(updatedHand)
        )
      }
      if (updatedHand.length < 3) {
        return (
          setPlayPile([...playPile, cardToPlay]),
          setDealerCards([...updatedHand, getNextCard('dealerHand')])
        )
      } else return (
        setPlayPile([...playPile, cardToPlay]),
        setDealerCards(updatedHand)
      )
    } else dealerCards.push.apply(dealerCards, playPile)
    setDealerCards(dealerCards)
    setPlayPile([])
  }

  function pickUp() {
    playerCards.push.apply(playerCards, playPile)
    setPlayerCards(playerCards)
    setPlayPile([])
  }

  function dealerPickUp() {
    dealerCards.push.apply(dealerCards, playPile)
    setDealerCards(dealerCards)
    setPlayPile([])
  }

  function checkLogic(card) {
    if (playPile.length === 0) {
      return true
    } else if (card.value === 2 || card.value === 3 || card.value === 10) {
      return true
    } else if (playPile[playPile.length - 1].value === 7 && card.value <= 7) {
      return true
    } else if (playPile[playPile.length - 1].value === 7 && card.value > 7) {
      return false
    } else if (playPile[playPile.length - 1].value <= card.value) {
      return true
    } else return false
  }

  // need function to check if 4 in a row in play pile
  // automotically play multiple of same card from hand??
  // end game logic
  // swap cards at begining
  // have computer be able to swap cards 
  // ability to 3 computer back

  return (
    <div>
      <button onClick={newGame}>New Game</button>
      {/* <button onClick={viewDeck}>View Deck</button> */}
      {/* <button onClick={drawCardButton}>Draw Card</button> */}
      <button onClick={pickUp}>Pick Up</button>
      <br />
      <br />
      <button onClick={dealerPlay}>Dealer Play</button>

      <div><h4>Discard and Play Pile:</h4>
        {discardPile && discardPile.map((card) => (
          <img style={{ height: 45, width: 30, padding: 1 }} src={card.back_img} />
        ))}
        <br />
        {playPile && playPile.map((card) => (
          <img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />
        ))}
      </div>
      <div><h4>Dealer Cards: <button onClick={() => setHidden(!hidden)}>Hide/Show</button></h4>
        {hidden && dealerDownHiddenCards && dealerDownHiddenCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />))}
        {hidden && dealerDownShownCards && dealerDownShownCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
        <br />
        {dealerCards && dealerCards.map((card) => (
          <img style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />
        ))}
      </div>
      <div><h4>Player down: <button onClick={() => setHidden(!hidden)}>Hide/Show</button></h4>
        {hidden && playerDownHiddenCards && playerDownHiddenCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />))}
        {hidden && playerDownShownCards && playerDownShownCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
      </div>
      <div><h4>Player hand:</h4>
        {playerCards && playerCards.map((card) => (
          <img onClick={() => playCard(card)} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />
        ))}
      </div>
    </div>
  );
}

export default App;