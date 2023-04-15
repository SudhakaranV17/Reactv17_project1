
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppDrawer';
import Drafts from './components/Drafts';
import Starred from './components/Starred';
import Inbox from './components/Inbox';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div >
    <ResponsiveAppBar/>

     <Routes>
            <Route path='/Inbox' element={<Inbox/>}></Route>
            <Route path='/Starred' element={<Starred/>}></Route>
            <Route path='/Drafts' element={<Drafts/>}></Route>
     </Routes>

    </div>
    </Router>
  );
}

export default App;
