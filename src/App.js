import './App.css';
import {Home} from './home.js';
import {Login} from './UserModule/login.js'
import {Register} from './UserModule/register.js'
import {HomeContainer} from './conatiners/HomeContainers.js'
import {BrowserRouter ,Routes, Switch, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

toast.configure()


function App() {
 
  return (
    <div className="App">

<BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={< Register />} />
          <Route path='/HomeContainer'  element={<HomeContainer></HomeContainer>} />
          
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
