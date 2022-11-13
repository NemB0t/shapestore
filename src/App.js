import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {useState} from 'react';
// import './App.css';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Navi from './Components/Navi';
import Store from './Components/Store';
import Footer from './Components/Footer';
import { Final } from './Components/Final';



function App() {
  const [sBList,setSBList] = useState([
    // {
    //   item:{id:7,
    //     name: 'Pythagoras Triangle',
    //     type:'premium',
    //     price: 30},
    //   count:2,
    // }
  ])

  const onAddItemChange = (listItem)=>{
    const pos = sBList.findIndex((sBitem)=>sBitem.item.id===listItem.item.id)
    if(pos>=0){
      sBList[pos].count=listItem.count;
    }
    else{
      setSBList((prevSBList)=>{
        return prevSBList.concat(listItem);
      });
    }
  };

  const onRemoveItemChange = (listId)=>{
    setSBList((prevSBList)=>{
      return prevSBList.filter(sBitem=>sBitem.item.id!==listId);
    })
  };
  
  return (
    <div className="flex text-center flex-col h-full gap-4">
      <BrowserRouter>
        <Navi/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/store" element={<Store onAddItemChange={onAddItemChange}/>} />
          <Route path="/checkout" element={<Checkout  sBList = {sBList} onRemoveItemChange={onRemoveItemChange} />} />
          <Route path="/final" element={<Final/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
