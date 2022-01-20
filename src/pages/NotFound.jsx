import { FaMehRollingEyes, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='text-center'>
      <h1 className=' font-bold text-6xl'>
        Oops! <FaMehRollingEyes className='mx-auto mt-7' />
      </h1>
      <h3 className='my-8 font-light'>404- Page Not Found</h3>
      <Link to='/' className='btn btn-primary'>
        Back to Home
        <FaHome className='mx-1 text-xl' />
      </Link>
    </div>
  );
}

export default NotFound;
