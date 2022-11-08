import {useState} from 'react';
import ShapeCard from './ShapeCard';
import './Store.css'


function Store() {

  const [shapeArr, setShapeArr] = useState([
    {id:1,
    name: 'Triangle',
    type:'std',
    price: 10},
    {id:2,
    name: 'Square',
    type:'std',
    price: 10},
    {id:3,
    name: 'Circle',
    type:'std',
    price: 10},
    {id:4,
    name: 'Space Invader',
    type:'premium',
    price: 30},
    {id:5,
    name: 'Pac-Man',
    type:'premium',
    price: 30},
    {id:6,
    name: 'Egg',
    type:'premium',
    price: 30},
    {id:7,
    name: 'Diamond',
    type:'premium',
    price: 30},
    {id:8,
    name: 'Infinity',
    type:'premium',
    price: 30},
    {id:9,
    name: 'Heart',
    type:'premium',
    price: 30}
    ]);

    return (
      <div className="Store">
        <h2>Shape for Sale</h2>
        <div className='std shapeBox'>
          <h3>Standard Shapes</h3>
          <ShapeCard shape={{id:2,name: 'Square',type:'std',price: 10}} />
        </div>
        <div className='premium shapeBox'>
          <h3>Premium Shapes</h3>
        </div>
      </div>
    );
  }
  
  export default Store;