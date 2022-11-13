import {useState} from 'react';
import './shapes.css'
// import './ShapeCard.css'
import { clsx } from 'clsx';



function ShapeCard(props) {
  const [itemCount, setItemCount] = useState(1);

  const shapeclass = clsx(
    'flex-auto text-center',
    {
    'triangle': props.shape.id===1,
    'square':props.shape.id===2,
    'circle':props.shape.id===3,
    'space-invader': props.shape.id===4,
    'pacman':props.shape.id===5,
    'egg':props.shape.id===6,
    // 'cut-diamond': props.shape.id===7,
    'triangle-bottomleft': props.shape.id===7,
    'infinity':props.shape.id===8,
    'heart':props.shape.id===9,
  })

  const handleAddCart = ()=>{
    props.onAddItemChange({
      item:{id:props.shape.id,
        name: props.shape.name,
        price: props.shape.price},
      count:itemCount,
    })
  };

  return (
    <div className="border-2 border-black h-56 w-44 text-left flex flex-col">
      <div className='flex-auto flex flex-col gap-1 pl-4'>
          <div className='font-semibold h-8'>{props.shape.name}</div>
          {/* <div className='clsx'>shpe will be here</div> */}
          <div className={shapeclass}></div>
          <div className='h-8'>$ {props.shape.price}</div>
      </div>
      {
        props.rm || false?
        <div className='h-12 flex justify-between items-center pl-4 pr-4 text-center'>
          <div className='cursor-pointer border border-black rounded p-2 self-start'>
            Remove item
          </div>
        </div>
        :
        <div className='h-12 flex justify-between items-center pl-4 pr-4 text-center'>
          <div className='text-sm border border-black rounded cursor-pointer p-1 select-none' onClick={handleAddCart}>Add to Cart</div>
          <div className='flex justify-center items-center gap-2'>
              <div className='border border-black rounded w-3 cursor-pointer select-none' 
              onClick={()=>{
                setItemCount((prevItemCount)=>{
                  if(prevItemCount===1){
                    return 1;
                  }
                  return prevItemCount-1});
              }}
              >-</div>
              <div className='quantity'>{itemCount}</div>
              <div className='border border-black rounded w-3 cursor-pointer select-none' 
              onClick={()=>{
                setItemCount((prevItemCount)=>{return prevItemCount+1});
              }}
              >+</div>
          </div>
        </div>
      }
      {/* <div className='h-12 flex justify-between items-center pl-4 pr-4 text-center'>
          <div className='cursor-pointer border border-black rounded p-2 self-start'>
            Remove item
          </div>
          <div className='text-sm border border-black rounded cursor-pointer p-1'>Add to Cart</div>
          <div className='flex justify-center items-center gap-2'>
              <div className='border border-black rounded w-3 cursor-pointer'>-</div>
              <div className='quantity'>1</div>
              <div className='border border-black rounded w-3 cursor-pointer'>+</div>
          </div>
      </div> */}
    </div>
  );
}

export default ShapeCard;