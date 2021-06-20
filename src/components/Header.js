import React from "react"
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/add-game">Add to Library</Link>
    </div>
  )
}

export default Header