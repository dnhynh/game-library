import './App.css'
import { useQuery, gql } from '@apollo/client'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from "./components/Header"
import Library from "./components/Library"
import AddGame from "./components/AddGame"

export const GET_LIBRARY = gql`
  query GetLibrary(
    $filter: string
  ) {
    library(filter: $filter) {
      games {
        name
        publisher
      }
    }
  }
`;

function App() {
  
  return (
    <div className="app-container">
      <Header />
      <div className="page-container">
        <Route
          exact
          path="/"
          component={Library}
        />
        <Route
          exact
          path="/add-game"
          component={AddGame}
        />
      </div>
    </div>
  );
}

export default App;
