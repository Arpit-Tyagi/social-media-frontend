import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

import './App.css';
import { Login } from './UserModule/login.js'
import { Register } from './UserModule/register.js'
import { HomeContainer } from './conatiners/HomeContainers.js'

toast.configure()


function App() {

  const user = useSelector((state)=>state.userReducer.user);
  console.log(user);

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={user?<HomeContainer/>:<Login/>} />
          <Route path="/Register" element={< Register />} />
        </Routes>
      </BrowserRouter>
      {/* <Router>
        <Switch>
         
          <Route path='/' exact component={Home} />
          <div>
          <Route path='/HomeContainer' exact component={HomeContainer} />
          </div>
        </Switch>
        
    </Router> */}
    </div>
  );
}

export default App;
