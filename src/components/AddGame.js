import {react, useState} from "react"
import { useMutation, gql } from "@apollo/client"

export const ADD_GAME = gql`
  mutation AddGame(
    $name: string,
    $publisher: string,
    $nickname: string,
    $rating: string
  ) {
    addGame(name: $name, publisher: $publisher, nickname: $nickname, rating: $rating) {
      publisher
      name
      nickname
      rating
    }
  }
`

const AddGame = () => {

  const [gameInfo, setGameInfo] = useState({
    publisher: '',
    name: '',
    nickname: '',
    rating: ''
  })

  const [addGame, { data }] = useMutation(ADD_GAME);

  const handleFormInput = (e) => {
    const { value, name } = e.target
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }))

    console.log(gameInfo)
  }

  const clearForm = () => {
    setGameInfo({
      publisher: '',
      name: '',
      nickname: '',
      rating: ''
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addGame({variables: gameInfo})
    clearForm()
  }

  return (
    <div className="add-game">
      <h1>Add Game to Library</h1>
      <form onSubmit={handleSubmit} >
        <input type="text" name="publisher" placeholder="Publisher" onChange={handleFormInput}/>
        <input type="text" name="name" placeholder="Name" onChange={handleFormInput}/>
        <input type="text" name="nickname" placeholder="Nickname" onChange={handleFormInput}/>

        <input 
          type="radio" 
          name="rating" 
          checked={gameInfo.rating === "FAVORITE"} 
          value="FAVORITE"
          onChange={handleFormInput}
        />
        <label htmlFor="Favorite">Favorite</label>
        <input 
          type="radio" 
          name="rating" 
          checked={gameInfo.rating === "MEH"} 
          value="MEH"
          onChange={handleFormInput}
        />
        <label htmlFor="Meh">Meh</label>
        <input 
          type="radio" 
          name="rating" 
          checked={gameInfo.rating === "DISLIKE"} 
          value="DISLIKE"
          onChange={handleFormInput}
        />
        <label htmlFor="Dislike">Dislike</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddGame