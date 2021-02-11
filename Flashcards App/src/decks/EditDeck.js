import React, { useEffect } from 'react'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import { listCards, listDecks, readDeck, updateDeck } from '../utils/api/index'

export default function EditDeck({
  currentDeck,
  setCurrentDeck,
  setDeckCollection,
  setCardCollection,
  refreshPage,
}) {
  const history = useHistory()
  const url = useRouteMatch()
  const deckId = url.params.deckId

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

  const handleChange = ({ target }) => {
    setCurrentDeck({
      ...currentDeck,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    updateDeck(currentDeck)
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
            Edit Deck
          </li>
        </ol>
      </nav>

      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            className='form-control'
            onChange={handleChange}
            value={currentDeck.name}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            name='description'
            id='description'
            rows='5'
            className='form-control'
            onChange={handleChange}
            value={currentDeck.description}
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
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
