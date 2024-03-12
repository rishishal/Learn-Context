import './App.css';
import UserContextProvider from './context/UserContextProvider';
import Login from './login';
import Profile from './Profile';


function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
