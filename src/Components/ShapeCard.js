import './shapes.css'
import './ShapeCard.css'
import { clsx } from 'clsx';



function ShapeCard(props) {
        return (
      <div className="ShapeCard">
        <div className='card-top'>
            <div className='name'>{props.shape.name}</div>
            {/* <div className='clsx'>shpe will be here</div> */}
            <div className={clsx(
              // 'shape',
              {
              'triangle': props.shape.id===1,
              'square':props.shape.id===2,
            })}></div>
            <div className='price'>{props.shape.price}</div>
        </div>
        <div className='card-bottom'>
            <button>Add to Cart</button>
            <div className='card-bottom-right'>
                <button>-</button>
                <div className='quantity'>1</div>
                <button>+</button>
            </div>
        </div>
      </div>
    );
  }
  
  export default ShapeCard;