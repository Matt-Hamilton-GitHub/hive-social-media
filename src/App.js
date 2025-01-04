
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import UserProfile from './pages/UserProfile';

function App() {

  return (
   <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/profile' element={<UserProfile />} />
   </Routes>
  );
}

export default App;
