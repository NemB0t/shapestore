import ShapeCard from "./ShapeCard";
// import './Checkout.css'

function Checkout(props) {
    return (
      <div className="flex-auto flex flex-col text-left p-4 gap-8">
        <div className="text-3xl font-semibold">Cart</div>
        {/* custom width */}
        <div className="grid grid-cols-4 justify-start items-center w-[60rem]">
          {
            props.sBList.map((sBitem)=>{
              return <ShapeCard shape={{id:sBitem.item.id,name: sBitem.item.name,price: sBitem.item.price*sBitem.count}} rm={true} />;
            })
          }
          {/* <ShapeCard shape={{id:1,name: 'brrr',price: 44}} rm={false} /> */}
        </div>
        <div className="text-xl font-semibold">Total: $ 44</div>
        <div className="cursor-pointer border border-black rounded p-4 self-start">Checkout</div>
      </div>
    );
  }
  
  export default Checkout;