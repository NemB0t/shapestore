// import './Navi.css';
import { Link } from "react-router-dom";

function Navi() {
    return (
    <nav className="flex-initial flex justify-between items-center p-12">
        <Link to="/" className='no-underline'>ShapeStore</Link>

        <ul className="flex justify-center items-center gap-12">
            <li className="list-none"><Link to="/" className='no-underline'>Home</Link></li>
            <li className="list-none"><Link to="/store" className='no-underline'>Store</Link></li>
            <li className="list-none"><Link to="/checkout" className='no-underline'>Checkout</Link></li>
        </ul>
    </nav>
    );
  }
  
  export default Navi;