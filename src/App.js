import './App.css';
// import { useNavigate } from 'react-router-dom';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Homepage from './Pages/Homepage'
// import Login from './Pages/Login';
// import Login from './Login';
import Admin from './Pages/Admin';
import Newbooking from './Pages/NewBookings/Newbooking';
import Bookings from './Pages/Bookings/Bookings';
import Availableroom from './Pages/Availableroom/Availableroom';
import Rooms from './Pages/Rooms/Rooms';
import Roomscreate from './Pages/Roomscreate/Roomscreate';
import Homepage from './Pages/Homepage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/newbooking' element={<Newbooking/>}/>
      <Route path='/bookings' element={<Bookings/>}/>
      <Route path='/availableroom' element={<Availableroom/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/roomscreate' element={<Roomscreate/>}/>
      <Route path='/homepage' element={<Homepage/>}/>

    </Routes>
    {/* <Routes>
    <Route path="/" element={<Admin/>}/>
    </Routes>
    <Routes>
    <Route path="/" element={<Login/>}/>
    </Routes> */}

    </BrowserRouter>
      
  );
}

export default App;
