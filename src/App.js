//import logo from './logo.svg';
import './App.css';
import{
  BrowserRouter,
   Routes,
   Route
  } from 'react-router-dom';

//import  { useRef } from 'react';
import Home from './Home';
//import Register from './Register';
import Display from './Display';
import About from './About';
import Events from './Events';
import Contact from './Contact';
import Submit from './Submit';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/register' element={<Display/>} />
    <Route path='/events' element={<Events/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/submit' element={<Submit/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
