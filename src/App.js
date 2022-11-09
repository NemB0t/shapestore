import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import './App.css';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Navi from './Components/Navi';
import Store from './Components/Store';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="flex text-center flex-col">
      <BrowserRouter>
        <Navi/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
