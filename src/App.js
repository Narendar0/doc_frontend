import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from './components/Topbar';
import Register from './components/register';
import Login from './components/login';
import Otp from './components/otp';
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
      <div className="App">
        <Topbar/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/otp" element={<Otp />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
