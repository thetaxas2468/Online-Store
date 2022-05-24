import './App.css';
import Home from './pages/Home/Home';
import Admin from "./pages/Admin/Admin.jsx"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Create from "./pages/Admin/Create/Create.jsx"
import Delete from "./pages/Admin/Delete/Delete.jsx"
import Update from "./pages/Admin/Update/Update.jsx"
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Secretlink" element={<Admin/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
          <Route path="/update" element={<Update/>}></Route>
          <Route path="/delete" element={<Delete/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
