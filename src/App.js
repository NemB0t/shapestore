import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useState,useEffect} from 'react';
// import './App.css';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Navi from './Components/Navi';
import Store from './Components/Store';
import Footer from './Components/Footer';


function App() {
  const [sBList,setSBList] = useState([
    {
      item:{id:7,
        name: 'Pythagoras Triangle',
        type:'premium',
        price: 30},
      count:2,
    }
  ])
  
  return (
    <div className="flex text-center flex-col h-full gap-4">
      <BrowserRouter>
        <Navi/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>} />
          <Route path="/checkout" element={<Checkout  sBList = {sBList}/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
