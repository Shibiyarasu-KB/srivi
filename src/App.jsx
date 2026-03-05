import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/AboutUs.jsx';
import Events from './pages/Event.jsx';
import Gallery from './pages/Gallery.jsx';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Nav from './pages/Nav.jsx';

export default function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Login' element={<Login />} />
          </Routes></BrowserRouter>
      </>
    </>

  )
}