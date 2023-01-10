import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from './components/landingPage';
import AdminLogin from './components/adminLogin';
import Userlogin from './components/userLogin';
import AdminHome from './components/adminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/adminlogin' element={<AdminLogin/>}/>
          <Route path='/userlogin' element={<Userlogin/>} />
          <Route path='/admin/*' element={<AdminHome/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
