import React from "react"

const GameInfo = ({gameInfo}) => {
  const {name, publisher, nickname, rating} = gameInfo
  return(
    <div className="game-block">
      <p>Game: {name}</p>
      <p>Publisher: {publisher}</p>
      <p>Nickname: {nickname}</p>
      <p>Rating: {rating}</p>
    </div>
  )
}

export default GameInfo