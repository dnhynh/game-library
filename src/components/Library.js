import React, { useState } from "react"
import { useLazyQuery, gql } from "@apollo/client"
import GameInfo from "./GameInfo"

export const GET_LIBRARY = gql`
  query GetLibrary($filter: String) {
    library(filter: $filter) {
      games {
        id
        publisher
        name
        nickname
        rating
      }
    }
  }
`;

const Library = () => {

  const [searchGames, { loading, data }] = useLazyQuery(GET_LIBRARY);
  const [ searchTerm, setSearchTerm ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    searchGames({
      variables: {
        filter: searchTerm
      }
    })
  }

  const handleForm = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      <h1>Game Library</h1>
      <div className="search-form">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Game Info" value={searchTerm} onChange={handleForm}/>
          <input type="submit" value="Search" />
        </form>
      </div>
      <div>
        {data && data.library.games.map((gameDetails) => (
          <GameInfo key={gameDetails.id} gameInfo={gameDetails} />
        ))}
        {data && console.log(data)}
        {loading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      </div>
    </div>
  )
}

export default Library