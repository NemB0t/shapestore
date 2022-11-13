// import {useState} from 'react';
import ShapeCard from './ShapeCard';
// import './Store.css'


function Store(props) {

  const shapeArr = [
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
    // {id:4,
    // name: 'Space Invader',
    // type:'premium',
    // price: 30},
    {id:5,
    name: 'Pac-Man',
    type:'premium',
    price: 30},
    // {id:6,
    // name: 'Egg',
    // type:'premium',
    // price: 30},
    {id:7,
    name: 'Pythagoras Triangle',
    type:'premium',
    price: 30},
    // {id:8,
    // name: 'Infinity',
    // type:'premium',
    // price: 30},
    {id:9,
    name: 'Heart',
    type:'premium',
    price: 30}
    ];

    return (
      <div className="flex-auto flex flex-col justify-center items-center pl-12 gap-4">
        <div className='text-4xl pr-80'>Shape's for Sale</div>
        <div className='grid grid-cols-3 gap-4 justify-center'>
          <div className='col-span-3 text-left text-2xl'>Standard Shapes</div>
          {shapeArr.filter(function(shape){
            return shape.type === 'std';
          }).map((shapec)=>{
            return <ShapeCard shape={{id:shapec.id,name: shapec.name,price: shapec.price}} onAddItemChange = {props.onAddItemChange} />;
          })}
        </div>
        <div className='grid grid-cols-3 gap-4'>
          <div className='col-span-3 text-left text-2xl'>Premium Shapes</div>
          {shapeArr.filter(function(shape){
            return shape.type === 'premium';
          }).map((shapec)=>{
            return <ShapeCard  shape={{id:shapec.id,name: shapec.name,price: shapec.price} } onAddItemChange = {props.onAddItemChange}/>;
          })}
        </div>
      </div>
    );
  }
  
  export default Store;