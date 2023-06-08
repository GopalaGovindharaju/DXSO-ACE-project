import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import Component3 from './planner_chitra/comp3_main';
import Cust_asset from './assest_harish/custasset'
import Machine from './assest_harish/Machine';
import Login from './home_temp/login';
import Table from './operator/table2.js';
import Leftcolumn from './inspection/leftbox.js';

function App() {
  return (
    <div className='App'>

    <Routes>

      <Route path='/' element={<First/>}></Route>

      <Route path='/' element={<Login/>}></Route>
      <Route path='/bom' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
      <Route path='/cust_assest' element={<Cust_asset/>}></Route>
      <Route path='/mach' element={<Machine/>}></Route>
     </Routes>
     </div>
  );
}
export default App;