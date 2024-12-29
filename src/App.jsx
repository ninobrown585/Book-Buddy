import { useSelector} from 'react-redux'
import { useState } from 'react'
import bookLogo from './assets/books.png'
import Nav from './components/Navigations'
import Register from './components/Register/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './components/Books/Books'
import SingleBook from './SingleBook/SingleBook'
import Login from './components/Login'

function App() {
  const token = useSelector(state => state.token);
  const[selectedBookId, setSelectedBookId] = useState();

  return (
    <>
      <h1><img id='logo-image' src={bookLogo}/>Library App</h1>

      {/* <p>Complete the React components needed to allow users to browse a library catalog, check out books, review their account, and return books that they've finished reading.</p>

      <p>You may need to use the `token` in this top-level component in other components that need to know if a user has logged in or not.</p>

      <p>Don't forget to set up React Router to navigate between the different views of your single page application!</p> */}
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element ={<Login />} />
          <Route path="/register" element ={<Register />} />
          <Route path= "/books/" element ={<Books />} />
          <Route path= "/books/:id" element ={<SingleBook selectedBookId ={selectedBookId} setSelectedBookId ={setSelectedBookId} />} />


        </Routes>

      </Router>
    </>
  )
}

export default App
