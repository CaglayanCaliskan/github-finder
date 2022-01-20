import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
function Navbar({ title }) {
  return (
    <div className='navbar mb-2 shadow-lg bg-neutral text-neutral-content'>
      <div className='container mx-auto'>
        <div className='flex-1 px-2 mx-2'>
          <Link to='/' className='flex items-center text-lg font-bold'>
            <FaGithub className='mx-2 text-4xl' />
            {title}
          </Link>
        </div>
        <div className='px-2 mx-2 '>
          <Link to='/' className='btn btn-ghost font-bold'>
            Home
          </Link>
          <Link to='/about' className='btn btn-ghost font-bold'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'Github Finder',
};

Navbar.protoType = {
  title: PropTypes.string,
};

export default Navbar;
