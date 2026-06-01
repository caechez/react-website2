import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages/Home2.js'
import Gallery from "./pages/Gallery.js"
import Contact from "./pages/Contact.js"
import MouseFollower from './components/MouseFollower.js'
import Background from './components/Background.js'

function App() {
  return (
    <div className="App">
      {/* <Background/> */}
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path="/gallery" exact element={<Gallery />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </Router>
        <MouseFollower/>
    </div>
  );
}

export default App;