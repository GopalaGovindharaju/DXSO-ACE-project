import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
<<<<<<< HEAD
import First from './home_gokul/login_home';
=======
import Component3 from './planner_chitra/comp3_main';
import Cust_asset from './assest_harish/custasset'
import Machine from './assest_harish/Machine';
import Login from './home_temp/login';

>>>>>>> b5160cb5e186ba5496f47de1faa5b97fb4df50ff
function App() {
  return (
    <div className='App'>

    <Routes>
<<<<<<< HEAD
      <Route path='/' element={<First/>}></Route>
=======
      <Route path='/' element={<Login/>}></Route>
      <Route path='/bom' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
      <Route path='/cust_assest' element={<Cust_asset/>}></Route>
      <Route path='/mach' element={<Machine/>}></Route>
>>>>>>> b5160cb5e186ba5496f47de1faa5b97fb4df50ff
     </Routes>
     </div>
  );
}
export default App;