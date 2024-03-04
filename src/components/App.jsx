import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


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
  const [gamesStarted, setGameStarted] = useState(false);
  const [turn, setTurn] = useState(0);
  const [swap, setSwap] = useState(false);
  let gameOver = false;
  let playerWon = false;
  const [dealerCards, setDealerCards] = useState([])
  const [dealerDownHiddenCards, setDealerDownHiddenCards] = useState([])
  const [dealerDownShownCards, setDealerDownShownCards] = useState([])
  const [playerCards, setPlayerCards] = useState([])
  const [playerDownHiddenCards, setPlayerDownHiddenCards] = useState([])
  const [playerDownShownCards, setPlayerDownShownCards] = useState([])
  const [playPile, setPlayPile] = useState([])
  const [drawDeck, setDrawDeck] = useState([])
  const [discardPile, setDiscardPile] = useState([])
  const [hidden, setHidden] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

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
    setGameStarted(true)
    setTurn(1)
    setSwap(true)
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
    endOfTurn()
  }

  // should be .then on newGame()
  // function dealerSwap() {
  //   let sortedHand = dealerCards.sort((a, b) => a.value - b.value)
  //   let sortedShown = dealerDownShownCards.sort((a, b) => a.value - b.value)
  //   for (let i = 0; i < sortedHand.length; i++) {
  //     if (sortedHand[i].value === 2 || sortedHand[i].value === 3 || sortedHand[i].value === 10) {
  //       sortedShown.push(sortedHand[i])
  //       sortedHand.filter((card) => card.value != sortedHand[i].value)
  //     }
  //   }
  //   console.log('hand', sortedHand);
  //   console.log('shown', sortedShown);

  // }

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

  function playCard(card, pile) {
    setSwap(false)
    playerCards.sort((a, b) => a.value - b.value)
    if (checkLogic(card) && pile === 'hand') {
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
        setDiscardPile([...discardPile, card])
        dealerCards.push.apply(dealerCards, playPile)
        setDealerCards(dealerCards)
        setPlayPile([])
      } else if (card.value === 10) {
        discardPile.push.apply(discardPile, playPile)
        setDiscardPile(discardPile)
        setPlayPile([])
      } else setPlayPile([...playPile, card])
    } else if (!checkLogic(card) && pile === 'hand') {
      alert('cant play that')
    } else if (checkLogic(card) && pile === 'shown') {
      let updatedHand = playerDownShownCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownShownCards(updatedHand)
      if (card.value === 3) {
        setDiscardPile([...discardPile, card])
        dealerCards.push.apply(dealerCards, playPile)
        setDealerCards(dealerCards)
        setPlayPile([])
      } else if (card.value === 10) {
        discardPile.push.apply(discardPile, playPile)
        setDiscardPile([...discardPile, card])
        setPlayPile([])
      } else setPlayPile([...playPile, card])
    } else if (!checkLogic(card) && pile === 'shown') {
      alert('cant play that')
    } else if (pile === 'hidden') {
      checkLogicHidden(card)
    } else if (pile === '3modal') {
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
      }
      let updatedPlayerHand = playerCards.filter((playerCard) => playerCard.display != card.display)
      if (updatedPlayerHand.length < 3 && drawDeck.length > 0) {
        setPlayerCards([...updatedPlayerHand, getNextCard('playerHand')])
      } else if (updatedPlayerHand.length < 3 && drawDeck.length === 0) {
        setPlayerCards(updatedPlayerHand)
      }
      if (updatedPlayerHand.length >= 3) {
        setPlayerCards(updatedPlayerHand)
      }
      if (card.value === 3) {
        setDiscardPile([...discardPile, card])
        dealerCards.push.apply(dealerCards, playPile)
        setDealerCards(dealerCards)
        setPlayPile([])
      }
    }
    endOfTurn()
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
    dealerCards.sort((a, b) => a.value - b.value)
    dealerDownShownCards.sort((a, b) => a.value - b.value)
    dealerDownHiddenCards.sort((a, b) => a.value - b.value)
    let cardToPlay;
    if (dealerCards.length === 0 && dealerDownShownCards.length === 0){
      //play down hidden cards
    }
    if (dealerCards.length === 0 && dealerDownShownCards.length>0){
      //play down shown cards
    }
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
      if (dealerCards[i].value > playPile[playPile.length - 1].value && dealerCards[i].value != 3 && dealerCards[i].value != 10) {
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

  // there's a bug for dealer playing on a 7
  // update to not draw if no cards left to draw
  // should be .then on playCard()
  function dealerPlay() {
    dealerCards.sort((a, b) => a.value - b.value)
    let cardToPlay = checkDealerCard()
    // if cardToPlay is defined, play the card, else draw
    if (cardToPlay) {
      let updatedHand = dealerCards.filter((dealerCard) => dealerCard.display != cardToPlay.display)
      if (drawDeck.length > 0) {
        if (cardToPlay.value === 3) {
          let player3 = playerCards.filter((card) => card.value === 3);
          if (player3[0]) {
            return (
              handleShow3(),
              setDiscardPile([...discardPile, cardToPlay]),
              setDealerCards([...updatedHand, getNextCard('dealerHand')]),
              endOfTurn()
            )
          } else {
            if (updatedHand.length < 3) {
              return (
                playerCards.push.apply(playerCards, playPile),
                setPlayerCards(playerCards),
                setPlayPile([]),
                setDiscardPile([...discardPile, cardToPlay]),
                setDealerCards([...updatedHand, getNextCard('dealerHand')]),
                endOfTurn()
              )
            } else return (
              playerCards.push.apply(playerCards, playPile),
              setPlayerCards(playerCards),
              setPlayPile([]),
              setDealerCards(updatedHand),
              endOfTurn()
            )
          }
        }
        if (cardToPlay.value === 10) {
          if (updatedHand.length < 3) {
            return (
              discardPile.push.apply(discardPile, playPile),
              setDiscardPile(discardPile),
              setPlayPile([]),
              setDealerCards([...updatedHand, getNextCard('dealerHand')]),
              endOfTurn(),
              alert('dealer played 10, hit dealer play again')
            )
          } else return (
            discardPile.push.apply(discardPile, playPile),
            setDiscardPile(discardPile),
            setPlayPile([]),
            setDealerCards(updatedHand),
            endOfTurn(),
            alert('dealer played 10, hit dealer play again')
          )
        }
        if (updatedHand.length < 3) {
          return (
            setPlayPile([...playPile, cardToPlay]),
            setDealerCards([...updatedHand, getNextCard('dealerHand')]),
            endOfTurn()
          )
        } else return (
          setPlayPile([...playPile, cardToPlay]),
          setDealerCards(updatedHand),
          endOfTurn()
        )
      } else if (drawDeck.length === 0) {
        if (cardToPlay.value === 3) {
          let player3 = playerCards.filter((card) => card.value === 3);
          if (player3[0]) {
            return (
              handleShow3(),
              setDiscardPile([...discardPile, cardToPlay]),
              setDealerCards(updatedHand),
              endOfTurn()
            )
          } else {
            return (
              playerCards.push.apply(playerCards, playPile),
              setPlayerCards(playerCards),
              setPlayPile([]),
              setDiscardPile([...discardPile, cardToPlay]),
              setDealerCards(updatedHand),
              endOfTurn()
            )
          }
        }
        if (cardToPlay.value === 10) {
          return (
            discardPile.push.apply(discardPile, playPile),
            setDiscardPile(discardPile),
            setPlayPile([]),
            setDealerCards(updatedHand),
            endOfTurn(),
            alert('dealer played 10, hit dealer play again')
          )
        }
        if (updatedHand.length < 3) {
          return (
            setPlayPile([...playPile, cardToPlay]),
            setDealerCards(updatedHand),
            endOfTurn()
          )
        }
      }
    } else dealerCards.push.apply(dealerCards, playPile)
    setDealerCards(dealerCards)
    setPlayPile([])
    endOfTurn()
  }

  // should have dealer play next automatically?
  function pickUp() {
    playerCards.push.apply(playerCards, playPile)
    setPlayerCards(playerCards)
    setPlayPile([])
  }

  function dealerPickUp() {
    dealerCards.push.apply(dealerCards, playPile)
    setDealerCards(dealerCards)
    setPlayPile([])
    endOfTurn()
  }

  // logic for selected hidden card
  function checkLogicHidden(card) {
    if (playPile.length === 0 && card.value === 3) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setDiscardPile([...discardPile, card])
      alert('You threed the computer, but there was nothing to pick up, dealers turn!')
    } else if (playPile.length === 0 && card.value === 10) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setDiscardPile([...discardPile, card])
      alert('You cleared the pile, play again')
    } else if (playPile.length === 0) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setPlayPile([...playPile, card])
    }
    if (card.value === 3) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setDiscardPile([...discardPile, card])
      dealerCards.push.apply(dealerCards, playPile)
      setDealerCards(dealerCards)
      setPlayPile([])
    } else if (card.value === 10) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      discardPile.push.apply(discardPile, playPile)
      setDiscardPile([...discardPile, card])
      setPlayPile([])
    } else if (playPile[playPile.length - 1].value === 7 && card.value <= 7) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setPlayPile([...playPile, card])
    } else if (playPile[playPile.length - 1].value === 7 && card.value > 7) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setPlayerCards([...playPile, card])
      setPlayPile([])
    } else if (playPile[playPile.length - 1].value <= card.value || card.value === 2) {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setPlayPile([...playPile, card])
    } else {
      let updatedHand = playerDownHiddenCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownHiddenCards(updatedHand)
      setPlayerCards([...playPile, card])
      setPlayPile([])
    }
  }

  // logic for selected card
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

  function sendCardToHandFromDown(card, player) {
    if (player === 'player') {
      let updatedHand = playerDownShownCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerDownShownCards(updatedHand)
      setPlayerCards([...playerCards, card])
    }
    if (player === 'dealer') {
      let updatedDealerHand = dealerDownShownCards.filter((dealerCard) => dealerCard.display != card.display)
      setDealerDownShownCards(updatedDealerHand)
      setDealerCards([...dealerCards, card])
    }

  }

  function sendCardToDownFromHand(card, player) {
    if (player === 'player') {
      let updatedHand = playerCards.filter((playerCard) => playerCard.display != card.display)
      setPlayerCards(updatedHand)
      setPlayerDownShownCards([...playerDownShownCards, card])
    }
    if (player === 'dealer') {
      let updatedDealerHand = dealerCards.filter((dealerCard) => dealerCard.display != card.display)
      setDealerCards(updatedDealerHand)
      setDealerDownShownCards([...dealerDownShownCards, card])
    }
  }

  function clickModal(card) {
    playCard(card, '3modal');
    handleClose3();
  }

  function endOfTurn() {
    // console.log('in end of turn');
    if (playerCards.length>0){
      playerCards.sort((a, b) => a.value - b.value)
    }
    // if (playPile.length > 3) {
    //   console.log('checking for 4');
    //   let card1 = playPile.pop()
    //   let card2 = playPile.pop()
    //   let card3 = playPile.pop()
    //   let card4 = playPile.pop()
    //   console.log('card1:', card1)
    //   console.log('card2:', card2)
    //   console.log('card3:', card3)
    //   console.log('card4:', card4)
    //   if (card1.value === card2.value === card3.value === card4.value) {
    //     console.log('in 4 in a row! playpile:', playPile);
    //     console.log('card1:', card1)
    //     console.log('card2:', card2)
    //     console.log('card3:', card3)
    //     console.log('card4:', card4)
    //     console.log('spliced:', playPile.splice(-4));
    //     setPlayPile(playPile.splice(-4))
    //     alert('4 in a row. go again!')
    //   }
    // }
    // increments turn
    setTurn(turn + 1)
    // checks to see if 4 in a row in play pile
    // checks to see if someone won
    if (gamesStarted && dealerCards.length === 0 && dealerDownShownCards.length === 0 && dealerDownHiddenCards.length === 0) {
      alert('dealer wins')
    }
    if (gamesStarted && playerCards.length === 0 && playerDownShownCards.length === 0 && playerDownHiddenCards.length === 0) {
      alert('You win')
    }
  }

  // automotically play multiple of same card from hand??
  // end game logic - 
  //   function to increment turn and check if someone has won 

  // have computer be able to 3 me back
  // alert for computer 3ing me

  // end of turn function
  // increments turn
  // checks to see if 4 in a row in play pile
  // checks to see if someone won

  return (
    <div>
      <Button variant="light" onClick={newGame}>New Game</Button>
      <Button variant="light" onClick={viewDeck}>View Deck</Button>
      {/* <Button variant="light" onClick={dealerSwap}>Dealer Swap</Button> */}
      <Button variant="light" onClick={pickUp}>Pick Up</Button>
      <br />
      <br />

      <div><h4>Draw Pile:</h4>
        {drawDeck && drawDeck.map((card) => (
          <img style={{ height: 18, width: 12, padding: 1 }} src={card.back_img} />
        ))}
      </div>
      <div><h4>Discard and Play Pile:</h4>
        {discardPile && discardPile.map((card) => (
          <img style={{ height: 45, width: 30, padding: 1 }} src={card.back_img} />
        ))}
        <br />
        {playPile && playPile.map((card) => (
          <img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />
        ))}
      </div>
      <div><h4>Dealer Cards: <Button variant="light" onClick={() => setHidden(!hidden)}>Hide/Show</Button> {swap ? <Button variant="light" onClick={handleShow}>Swap</Button> : <></>}</h4>
        {hidden && dealerDownHiddenCards && dealerDownHiddenCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />))}
        {hidden && dealerDownShownCards && dealerDownShownCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
        <br />
        {dealerCards && dealerCards.map((card) => (
          <img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />
        ))}
      </div>
      <div><h4>Player down: <Button variant="light" onClick={() => setHidden(!hidden)}>Hide/Show</Button> {swap ? <Button variant="light" onClick={handleShow}>Swap</Button> : <></>}</h4>
        {hidden &&
          <>
            {playerDownHiddenCards && playerDownShownCards.length > 0 ?
              playerDownHiddenCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />))
              :
              playerDownHiddenCards.map((card) => (<img onClick={() => playCard(card, 'hidden')} style={{ height: 90, width: 60, padding: 5 }} src={card.back_img} />))}

            {playerDownShownCards && playerCards.length > 0 ?
              playerDownShownCards.map((card) => (<img style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))
              :
              playerDownShownCards.map((card) => (<img onClick={() => playCard(card, 'shown')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
          </>
        }
      </div>
      <div><h4>Player hand: <Button onClick={dealerPlay}>Dealer Play</Button></h4>
        {playerCards && playerCards.map((card) => (
          <img onClick={() => playCard(card, 'hand')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />
        ))}
      </div>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Click to swap cards</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="bg-success"><h4>Player Down:</h4>
                    {playerDownShownCards.map((card) => (<img onClick={() => sendCardToHandFromDown(card, 'player')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
                  </div>
                </td>
                <td>
                  <div className="bg-success"><h4>Dealer Down:</h4>
                    {dealerDownShownCards.map((card) => (<img onClick={() => sendCardToHandFromDown(card, 'dealer')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="bg-success"><h4>Player hand:</h4>
                    {playerCards && playerCards.map((card) => (<img onClick={() => sendCardToDownFromHand(card, 'player')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
                  </div>
                </td>
                <td>
                  <div className="bg-success"><h4>Dealer hand:</h4>
                    {dealerCards && dealerCards.map((card) => (<img onClick={() => sendCardToDownFromHand(card, 'dealer')} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show3} onHide={handleClose3} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You got three'd, Click on your 3 to three them back!
          <div className="bg-success"><h4>Player hand:</h4>
            {playerCards.filter((card) => card.value === 3).map((card) => (<img onClick={() => clickModal(card)} style={{ height: 90, width: 60, padding: 5 }} src={card.front_img} />))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="light" onClick={handleClose3}>
            No?
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;