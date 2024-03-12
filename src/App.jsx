import { useState } from 'react';

import './App.css';
import Login from './login';
import UserName from './UserName';
import UserContex from './Contex';

function App() {
  const [userName, setUserName] = useState('');

  return (
    <>
      <UserContex.Provider value={{ loggedInUser: userName, setUserName }}>
        <Login />
        <UserName />
      </UserContex.Provider>
    </>
  );
}

export default App;
