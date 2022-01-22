import { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
function UserSeach() {
  const { users } = useContext(GithubContext);
  const [text, setText] = useState('');
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alert('search something');
    } else {
      //todo search users
      setText('');
    }
  };
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <form onSubmit={handleSubmit}>
        <div className='form-control '>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search'
              className='w-full input input-primary input-bordered input-lg text-3xl'
              value={text}
              onChange={handleChange}
            />
            <button
              className='absolute top-0 right-0 rounded-l-none btn btn-primary btn-lg'
              type='submit'
            >
              Go
            </button>
          </div>
        </div>
      </form>
      {users.length > 0 && (
        <div>
          <button className='btn btn-lg btn-secondary'>clear</button>
        </div>
      )}
    </div>
  );
}

export default UserSeach;
