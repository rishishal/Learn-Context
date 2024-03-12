import { useContext, useState } from 'react';
import UserContext from "./context/Contex"

const Login = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const {setUser } = useContext(UserContext);
  const handleSubmit= (e) => {
    e.preventDefault()
    //setUser(userName) :- pass the value State variable
    setUser({userName,password}) // passing both value in object
  };
  return (
    <div>
      <input
        className="inputBox"
        type="text"
        placeholder="username"
        value={userName}
        onChange={(e)=> setUserName(e.target.value)}

      />
        <input
        className="inputBox"
        type="password"
        placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        
      />
      <button className='button' type='submit' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
