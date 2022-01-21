import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md h-20 bg-gray-800 flex-row items-center space-x-4 px-4 '>
      <div className='avatar mx-2'>
        <div className='rounded-full w-16 h-16 shadow'>
          <img src={avatar_url} alt='avatar' />
        </div>
      </div>

      <h2 className='card-title flex-1 items-center mx-0 my-0'> {login} </h2>
      <Link to={`/users/${login}`} className='btn btn-xs btn-primary my-0'>
        Profile
      </Link>
    </div>
  );
}
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
