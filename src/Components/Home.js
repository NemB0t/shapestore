import { Link } from 'react-router-dom';
// import './Home.css'


function Home() {
    return (
      <div className='flex flex-auto justify-start text-left gap-4'>
        <div className="pl-40 bg-orange-3000 pt-32">
          <div className='text-3xl font-semibold pb-3'>Welcome to the ShapeStore</div>
          <div className='text-2xl pb-2'>We serve all your shape needs</div>
          <div>Free home delivery. 
            <a className='underline' href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target={'_blank'} rel="noopener noreferrer">
              Terms and Conditions
            </a> may apply
          </div>
        </div>
        <Link to="/store" className='border border-black rounded p-4 self-center mb-24'>Go to Store</Link>
      </div>
    );
  }
  
  export default Home;