import { useContext } from 'react';
import UserContex from './Contex';

const Login = () => {
  const { loggedInUser, setUserName } = useContext(UserContex);
  const handleName = (e) => {
    setUserName(e.target.value);
  };
  return (
    <div>
      <input
        className="inputBox"
        type="text"
        placeholder="username"
        value={loggedInUser}
        onChange={handleName}
      />
    </div>
  );
};

export default Login;
