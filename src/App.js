import './App.css';
import Home from './pages/Home/Home';
import Admin from "./pages/Admin/Admin.jsx"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from "./pages/Admin/Create/Create.jsx"
import Delete from "./pages/Admin/Delete/Delete.jsx"
import Update from "./pages/Admin/Update/Update.jsx"
import Signin from "./pages/Signin/Signin.jsx"
import Signup from "./pages/Signup/Signup.jsx"
import NotFound from "./pages/NotFound/NotFound.jsx"
import Loggedin from "./pages/Home/Loggedin"
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/Secretlink" element={<Admin/>}></Route>
          <Route exact path="/create" element={<Create/>}></Route>
          <Route exact path="/update" element={<Update/>}></Route>
          <Route exact path="/delete" element={<Delete/>}></Route>
          <Route exact path="/Signin" element={<Signin/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path="/Loggedin" element={<Loggedin/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
