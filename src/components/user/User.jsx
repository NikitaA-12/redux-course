import { useSelector } from 'react-redux';
import UseActions from '../../hooks/useActions';

const User = () => {
  const { isLoading, error, user } = useSelector((state) => state.user);

  const { getUserById } = UseActions();

  return (
    <div>
      <button onClick={() => getUserById(1)}>Get User</button>
      {isLoading ? (
        <div>LOADING...</div>
      ) : error ? (
        <div>{error.message}</div>
      ) : user?.name ? (
        <h1>USER: {user.name}</h1>
      ) : (
        <h1>USER NOT FOUND</h1>
      )}
    </div>
  );
};

export default User;
