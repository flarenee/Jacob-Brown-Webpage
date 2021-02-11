import React, { useEffect } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import {
  listDecks,
  readDeck,
  listCards,
  updateCard,
  readCard,
} from '../utils/api/index'

export default function EditCard({
  currentCard,
  setCurrentCard,
  currentDeck,
  setCurrentDeck,
  setDeckCollection,
  setCardCollection,
  refreshPage,
}) {
  const url = useRouteMatch()
  const deckId = url.params.deckId
  const cardId = url.params.cardId
  const history = useHistory()

  useEffect(() => {
    async function render() {
      const setDecks = await listDecks()
      await setDeckCollection(setDecks)
      const setDeck = await readDeck(deckId)
      await setCurrentDeck(setDeck)
      const setCards = await listCards(deckId)
      await setCardCollection(setCards)
      const setCard = await readCard(cardId)
      await setCurrentCard(setCard)
    }
    render()
  }, [])

  useEffect(() => {
    async function correctCard() {
      const response = await readCard(cardId)
      setCurrentCard(response)
    }
    correctCard()
  }, [])

  const handleChange = ({ target }) => {
    setCurrentCard({
      ...currentCard,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateCard(currentCard)
    history.push(`/decks/${currentDeck.id}`)
    refreshPage()
  }

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='20'
                fill='currentColor'
                className='bi bi-house-door-fill mr-1'
                viewBox='0 3 16 16'
              >
                <path d='M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z' />
              </svg>
              Home
            </Link>
          </li>
          <li className='breadcrumb-item'>
            <Link to={`/decks/${currentDeck.id}`}>{currentDeck.name}</Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h1>Edit Card</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='front'>Front</label>
          <textarea
            name='front'
            id='front'
            rows='5'
            className='form-control'
            onChange={handleChange}
            value={currentCard.front}
            required
          ></textarea>
        </div>
        <div className='form-group'>
          <label htmlFor=''>Back</label>
          <textarea
            name='back'
            id='back'
            rows='5'
            className='form-control'
            onChange={handleChange}
            value={currentCard.back}
            required
          ></textarea>
        </div>
        <div className='btns mb-3'>
          <Link
            to={`/decks/${currentDeck.id}`}
            className='btn btn-secondary mr-2'
          >
            Cancel
          </Link>
          <button type='submit' className='btn btn-primary'>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
