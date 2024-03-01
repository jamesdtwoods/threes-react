import { useSelector } from 'react-redux'

function DrawPile() {
    const deck = useSelector((store) => store.deck)


    return (
        <div>
            {deck.map((card) => <p>{card.display}</p>)}
        </div>
    )
}

export default DrawPile;