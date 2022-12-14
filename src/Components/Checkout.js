import ShapeCard from "./ShapeCard";
import { Link } from "react-router-dom";

function Checkout(props) {
  
  const sumtotal = ()=>{
    if(props.sBList.length){
      return props.sBList.map((sBitem)=>{
        return sBitem.item.price*sBitem.count;
      }).reduce((total,curr)=>total+curr);
    }
    else{
      return 0;
    }
  };
  
  return (
    <div className="flex-auto flex flex-col text-left p-4 gap-8">
      <div className="text-3xl font-semibold">Cart</div>
      {/* custom width */}
      <div className=" sm:pl-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start gap-4 sm:gap-12 items-center lg:w-[60rem]">
        {
          props.sBList.map((sBitem)=>{
            return <ShapeCard shape={{id:sBitem.item.id,name: sBitem.item.name,price: sBitem.item.price*sBitem.count}} rm={true} onRemoveItemChange={props.onRemoveItemChange}/>;
          })
        }
        {/* <ShapeCard shape={{id:1,name: 'brrr',price: 44}} rm={false} /> */}
      </div>
      <div className="text-xl font-semibold">Total: $ {sumtotal()}</div>
      {/* <div className="cursor-pointer border border-black rounded p-4 self-start">Checkout</div> */}
      <Link to="/final" className='no-underline border border-black self-start p-2'>Checkout</Link>
    </div>
  );
}
  
  export default Checkout;