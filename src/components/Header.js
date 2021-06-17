import react from "react"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/add-game">Add to Library</Link>
    </div>
  )
}

export default Header