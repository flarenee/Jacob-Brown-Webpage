import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default function Decks({
  deckCollection,
  setCurrentDeck,
  deleteDeckHandler,
  cardCollection,
}) {
  let deckList = []

  // const url = useRouteMatch()

  return (
    <div>
      <NewDeckButton />
      <div className='list-group'>
        <GetDecks />
      </div>
    </div>
  )

  // Components

  function NewDeckButton() {
    return (
      <Link
        to='/decks/new'
        className='btn btn-secondary btn-lg mb-3'
        style={{ alignItems: 'center' }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='2rem'
          height='2rem'
          fill='currentColor'
          className='bi bi-plus'
          viewBox='0 0 16 18'
        >
          <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
        </svg>
        Create Deck
      </Link>
    )
  }

  function GetDecks() {
    return (deckList = deckCollection.map((deck, index) => (
      <div
        className='list-group-item list-group-item-action flex-column align-items-start'
        key={index}
      >
        <div className='d-flex w-100 justify-content-between'>
          <h5 className='mb-1'>{deck.name}</h5>
          <small>{deck.cards.length} cards</small>
        </div>
        <p className='mb-1'>{deck.description}</p>

        <div className='btns d-flex'>
          {/* View */}
          <Link
            to={`decks/${deck.id}`}
            className='btn btn-secondary mr-2'
            onClick={() => setCurrentDeck(deck)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-eye mr-1'
            >
              <path d='M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z' />
              <path d='M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z' />
            </svg>
            View
          </Link>
          {/* Study */}
          <Link
            to={`decks/${deck.id}/study`}
            className='btn btn-primary mr-2'
            onClick={() => setCurrentDeck(deck)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-journal-bookmark-fill mr-1'
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
          {/* Delete */}
          <button
            className='btn btn-danger ml-auto'
            onClick={() => {
              if (window.confirm('Delete this deck?'))
                deleteDeckHandler(deck, cardCollection)
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
}
