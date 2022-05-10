import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Todo from './components/Todo'
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todo">Data Todo</Link></li>
          </ul>
        </nav>
        <Routes>
        <Route path="/" element={
          <>
          <h1>Selamat Datang</h1>
          <h2>Di Aplikasi sederhana Ini</h2>
          </>
        } />
        <Route path="/todo" element={<Todo />} />
        </Routes>
      </Router>
    </div>
    )
}

export default App;