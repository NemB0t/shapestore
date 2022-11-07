import { Link } from 'react-router-dom';
import Footer from './Footer';
import './Home.css'


function Home() {
    return (
      <div className='home-elem'>
        <div className='home-content'>
          <div className="main">
            <h1>Welcome to the ShapeStore</h1>
            <h2>We serve all your shape needs</h2>
            <h7>Free home delivery. <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'} rel="noopener noreferrer">Terms and Conditions</a> may apply</h7>
          </div>
          <Link to="/store" className='link-btn'>Go to Store</Link>
        </div>
        <Footer/>
      </div>
    );
  }
  
  export default Home;