import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import NotFound from './NotFound'
import Decks from '../decks/Decks'
import Deck from '../decks/Deck'
import NewDeck from '../decks/NewDeck'
import StudyDeck from '../decks/StudyDeck'
import EditDeck from '../decks/EditDeck'
import AddCard from '../cards/AddCard'
import EditCard from '../cards/EditCard'
import {
  listDecks,
  readDeck,
  deleteDeck,
  deleteCard,
  listCards,
  readCard,
} from '../utils/api/index'

export default function Layout() {
  const [deckCollection, setDeckCollection] = useState([])
  const [currentDeck, setCurrentDeck] = useState([])
  const [cardCollection, setCardCollection] = useState([])
  const [currentCard, setCurrentCard] = useState([])

  const history = useHistory()
  const url = useRouteMatch()
  const deckId = url.params.deckId
  const cardId = url.params.cardId

  function refreshPage() {
    window.location.reload(true)
  }

  async function renderData() {
    const setDecks = await listDecks()
    await setDeckCollection(setDecks)
    const setDeck = await readDeck(deckId)
    await setCurrentDeck(setDeck)
    const setCards = await listCards(deckId)
    await setCardCollection(setCards)
    if (cardId) {
      const setCard = await readCard(cardId)
      await setCurrentCard(setCard)
    }
  }

  // Displays the collection of decks saved in the database
  useEffect(() => {
    async function displayDecks() {
      const response = await listDecks()
      setDeckCollection(response)
    }
    displayDecks()
  }, [])

  // Reads the selected deck's contents
  function focusDeckHandler() {
    async function findDeck() {
      const response = await readDeck(deckId)
      await setCurrentDeck(response)
    }
    findDeck()
  }

  function checkButton(event) {
    console.log('You clicked a button with an id of:', event)
  }

  function deleteCardHandler(card) {
    const id = card.id
    deleteCard(id)
    history.go(-2)
    refreshPage()
  }

  async function deleteDeckHandler(deck) {
    deleteDeck(deck.id)
    history.push('/')
    refreshPage()
  }
  return (
    <>
      <Header />
      <div className='container mb-2'>
        <Switch>
          <Route exact path='/'>
            <Decks
              deckCollection={deckCollection}
              setCurrentDeck={setCurrentDeck}
              deleteDeckHandler={deleteDeckHandler}
              cardCollection={cardCollection}
            />
          </Route>
          <Route path='/decks/new'>
            <NewDeck
              deckCollection={deckCollection}
              setDeckCollection={setDeckCollection}
            />
          </Route>
          <Route path='/decks/:deckId/study'>
            <StudyDeck
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              setDeckCollection={setDeckCollection}
              setCardCollection={setCardCollection}
            />
          </Route>
          <Route exact path='/decks/:deckId'>
            <Deck
              renderData={renderData}
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              setDeckCollection={setDeckCollection}
              setCurrentCard={setCurrentCard}
              cardCollection={cardCollection}
              setCardCollection={setCardCollection}
              deleteCardHandler={deleteCardHandler}
              deleteDeckHandler={deleteDeckHandler}
            />
          </Route>
          <Route exact path='/decks/:deckId/edit'>
            <EditDeck
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              setDeckCollection={setDeckCollection}
              setCardCollection={setCardCollection}
              refreshPage={refreshPage}
            />
          </Route>
          <Route exact path='/decks/:deckId/cards/new'>
            <AddCard
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              cardCollection={cardCollection}
              setCardCollection={setCardCollection}
              setDeckCollection={setDeckCollection}
              refreshPage={refreshPage}
            />
          </Route>
          <Route exact path='/decks/:deckId/cards/:cardId/edit'>
            <EditCard
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              currentDeck={currentDeck}
              setCurrentDeck={setCurrentDeck}
              setDeckCollection={setDeckCollection}
              setCardCollection={setCardCollection}
              refreshPage={refreshPage}
            />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  )
}
