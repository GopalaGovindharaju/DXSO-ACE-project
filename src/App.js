import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import First from './home_gokul/login_home';
function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<First/>}></Route>
     </Routes>
     </div>
  );
}
export default App;