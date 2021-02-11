import React, { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { listCards, listDecks, readDeck } from '../utils/api/index'

export default function Deck({
  renderData,
  currentDeck,
  setCurrentDeck,
  setDeckCollection,
  setCurrentCard,
  cardCollection,
  setCardCollection,
  deleteCardHandler,
  deleteDeckHandler,
}) {
  const url = useRouteMatch()
  const deckUrl = url.url
  const deckId = url.params.deckId

  // Displays the collection of decks saved in the database

  useEffect(() => {
    async function render() {
      const setDecks = await listDecks()
      await setDeckCollection(setDecks)
      const setDeck = await readDeck(deckId)
      await setCurrentDeck(setDeck)
      const setCards = await listCards(deckId)
      await setCardCollection(setCards)
    }
    render()
  }, [])

  // Components

  function ShowDeck() {
    return (
      <div className='deck'>
        <h5>{currentDeck.name}</h5>
        <p>{currentDeck.description}</p>
        <div className='btns d-flex'>
          {/* Edit Deck */}
          <Link to={`${deckUrl}/edit`} className='btn btn-secondary mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-pencil-fill'
              viewBox='0 0 16 20'
            >
              <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
            </svg>
            Edit
          </Link>
          {/* Study */}
          <Link to={`${deckId}/study`} className='btn btn-primary mr-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-journal-bookmark-fill mr-1'
              viewBox='0 0 16 20'
            >
              <path
                fillRule='evenodd'
                d='M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8V1z'
              />
              <path d='M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z' />
              <path d='M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z' />
            </svg>
            Study
          </Link>
          {/* Add Cards */}
          <Link to={`${deckUrl}/cards/new`} className='btn btn-primary'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-plus-circle-fill mr-1'
              viewBox='0 0 16 20'
            >
              <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
            </svg>
            Add Cards
          </Link>
          {/* Delete */}
          <button
            className='btn btn-danger ml-auto'
            onClick={() => {
              if (window.confirm('Delete this deck?'))
                deleteDeckHandler(currentDeck, cardCollection)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-trash'
            >
              <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
              <path
                fillRule='evenodd'
                d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
              />
            </svg>
          </button>
        </div>
      </div>
    )
  }

  let deckOfCards = []

  function ShowCards() {
    return (deckOfCards = cardCollection.map((card, index) => (
      <div
        className='list-group-item list-group-item-action flex-column align-items-start'
        key={index}
      >
        <div className='row'>
          <p className='mb-1 col-6'>{card.front}</p>
          <p className='mb-1 col-6'>{card.back}</p>
        </div>

        <div className='btns float-right'>
          {/* Edit Card */}
          <Link
            to={`${deckUrl}/cards/${card.id}/edit`}
            className='btn btn-secondary mr-2'
            onClick={setCurrentCard(card)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-pencil-fill'
              viewBox='0 0 16 20'
            >
              <path d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z' />
            </svg>
            Edit
          </Link>
          {/* Delete Card */}
          <button
            className='btn btn-danger'
            onClick={() => {
              if (window.confirm('Delete this card?')) deleteCardHandler(card)
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-trash'
            >
              <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
              <path
                fillRule='evenodd'
                d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
              />
            </svg>
          </button>
        </div>
      </div>
    )))
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

          <li className='breadcrumb-item active' aria-current='page'>
            {currentDeck.name}
          </li>
        </ol>
      </nav>
      <ShowDeck />
      <h2 className='mt-3'>Cards</h2>
      <div className='card'>
        <ShowCards />
      </div>
    </div>
  )
}
