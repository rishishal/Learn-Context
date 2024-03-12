import { useContext } from 'react';
import UserContex from './Contex';

const UserName = () => {
  const { loggedInUser } = useContext(UserContex);

  return (
    <div>
      <h1>Welcome {loggedInUser}</h1>
    </div>
  );
};

export default UserName;
