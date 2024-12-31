import About from './Components/FunctionalComponent/About';
import Home from './Components/FunctionalComponent/Home';
import Gallery from './Components/FunctionalComponent/Gallery';
import Contact from './Components/FunctionalComponent/Contact';
import NavBar from './Components/FunctionalComponent/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route path='/' element = {<Home />}/>
    <Route path='/about' element = {<About college = "Kongu Engineering" clg1 ="Kongu Arts" clg2 ="Kongu Naturopathy"/>}/>
    <Route path='/gallery' element = {<Gallery />}/>
    <Route path='/contact' element = {<Contact />}/>
    </Routes>
    </BrowserRouter>
      {/* <Home />
      <Gallery />
      <Contact />
      <ClassCompEg/> */}
    </div>
  )
}

export default App
