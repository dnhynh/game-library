import {react, useState} from "react"
import { useQuery, gql } from "@apollo/client"

const AddGame = () => {

  const [rating, setRating] = useState('')

  return (
    <div className="add-game">
      <h1>Add Game to Library</h1>
      <form>
        <input type="text" name="publisher" placeholder="Publisher"/>
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="" placeholder="Nickname"/>

        <input 
          type="radio" 
          name="rating" 
          checked={rating === "Favorite"} 
          value="Favorite"
          onclick={() => { setRating("Favorite") }}
        />
        <label htmlFor="Favorite">Favorite</label>
        <input 
          type="radio" 
          name="rating" 
          checked={rating === "Meh"} 
          value="Meh"
          onclick={() => { setRating("Meh") }}
        />
        <label htmlFor="Meh">Meh</label>
        <input 
          type="radio" 
          name="rating" 
          checked={rating === "Dislike"} 
          value="Dislike"
          onclick={() => { setRating("Dislike") }}
        />
        <label htmlFor="Dislike">Dislike</label>
      </form>
    </div>
  )
}

export default AddGame