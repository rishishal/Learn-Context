import { useContext } from 'react';
import UserContext from './context/Contex';

const Profile = () => {
  const {user} = useContext(UserContext); // using user value 

  return (
    <div>
     {user ?(  <h1>Welcome {user.userName}</h1> ):(<h1>please Login</h1> ) }
    </div>
  );
};

export default Profile;
