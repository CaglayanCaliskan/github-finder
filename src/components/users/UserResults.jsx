import { data } from 'autoprefixer';
import { useEffect, useState } from 'react';

function UserResults() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className=' grid grid-cols-1 gap-8 xl:grid-cols-5 lg:grid-cols-4  md:grid-cols-3'>
        {users.map((user, index) => (
          <p key={index}>{user.login}</p>
        ))}
      </div>
    );
  } else {
    return <h1>LOADİNG</h1>;
  }
}

export default UserResults;
