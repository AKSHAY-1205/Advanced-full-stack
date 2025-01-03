import About from './Components/FunctionalComponent/About';
import Home from './Components/FunctionalComponent/Home';
import Gallery from './Components/FunctionalComponent/Gallery';
import Contact from './Components/FunctionalComponent/Contact';
import NavBar from './Components/FunctionalComponent/NavBar';
import Footer from './Components/FunctionalComponent/Footer';
import UseEffect from './Components/FunctionalComponent/UseEffect';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseRef from './Components/FunctionalComponent/UseRef';
import ExamResults from './Components/FunctionalComponent/UseContext';
import UseMemo from './Components/FunctionalComponent/UseMemo';
import UseRefNumber from './Components/FunctionalComponent/UseRefNumber';
import UseEffectImages from './Components/FunctionalComponent/UseEffectImages';

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
    <Route path='/useeffect' element = {<UseEffect />}/>
    <Route path='/useref' element = {<UseRef />}/>
    <Route path='/usecontext' element = {<ExamResults />}/>
    <Route path='/usememo' element = {<UseMemo />}/>
    <Route path='/userefnumber' element = {<UseRefNumber />}/>
    <Route path='/useeffectimages' element = {<UseEffectImages />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
      {/* <Home />
      <Gallery />
      <Contact />
      <ClassCompEg/> */}
    </div>
  )
}
export default App