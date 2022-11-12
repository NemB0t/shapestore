import ShapeCard from "./ShapeCard";
// import './Checkout.css'

function Checkout() {
    return (
      <div className="flex-auto flex flex-col text-left p-4 gap-8">
        <div className="text-3xl font-semibold">Cart</div>
        <div className="grid grid-cols-4 justify-start items-center">
          <ShapeCard shape={{id:1,name: 'brrr',price: 44}} />
          <ShapeCard shape={{id:1,name: 'brrr',price: 44}} />
          <ShapeCard shape={{id:1,name: 'brrr',price: 44}} />
          <ShapeCard shape={{id:1,name: 'brrr',price: 44}} />
        </div>
        <div className="text-xl font-semibold">Total: $ 44</div>
        <div className="cursor-pointer border border-black rounded p-4 self-start">Checkout</div>
      </div>
    );
  }
  
  export default Checkout;