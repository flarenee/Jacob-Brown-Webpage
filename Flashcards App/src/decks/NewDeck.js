import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { createDeck } from '../utils/api/index'

export default function NewDeck({ deckCollection, setDeckCollection }) {
  const history = useHistory()
  const initialState = {
    name: '',
    description: '',
  }

  let lastDeck = deckCollection[deckCollection.length - 1]

  const [formData, setFormData] = useState({ ...initialState })
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const response = createDeck(formData)
    setDeckCollection(...deckCollection, response)
    history.push(`/decks/${lastDeck.id + 1}`)
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
            Create Deck
          </li>
        </ol>
      </nav>
      <div className='content'>
        <h1>Create Deck</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              placeholder='Deck Name'
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              name='description'
              id='description'
              rows='5'
              placeholder='Brief description of the deck'
              className='form-control'
              onChange={handleChange}
              value={formData.description}
              required
            ></textarea>
          </div>
          <div className='btns mb-3'>
            <Link to='/' className='btn btn-secondary mr-2'>
              Cancel
            </Link>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
