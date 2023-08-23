import logo from './logo.svg';
import './App.css';
import './styles/utilities.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Home from './components/home';
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
