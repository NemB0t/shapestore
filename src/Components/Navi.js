import './Navi.css';
import { Link } from "react-router-dom";

function Navi() {
    return (
    <nav>
        <li><Link to="/" className='link-tag'>ShapeStore</Link></li>

        <ul>
            <li><Link to="/" className='link-tag'>Home</Link></li>
            <li><Link to="/store" className='link-tag'>Store</Link></li>
            <li><Link to="/checkout" className='link-tag'>Checkout</Link></li>
        </ul>
    </nav>
    );
  }
  
  export default Navi;