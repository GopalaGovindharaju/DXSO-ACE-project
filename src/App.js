import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import Component3 from './planner_chitra/comp3_main';
import Cust_asset from './assest_harish/custasset'
import Machine from './assest_harish/Machine';
import Login from './home_gokul/login_home';
import Table from './operator/table2.js';
import First  from './home_gokul/login_home.js';
import Leftbox from './inspection/leftbox.js';
import Lbox from './inspector/lbox.js';
import Signin from './home_gokul/newone.js';

function App()
{
return (
    <div className='App'>

    <Routes>

      <Route path='/first' element={<First/>}></Route>
      <Route path='/newone' element={<Signin/>}></Route>
      <Route path='/' element={<First/>}></Route>

      <Route path='/' element={<Login/>}></Route>
      <Route path='/bom' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
      <Route path='/cust_assest' element={<Cust_asset/>}></Route>
      <Route path='/mach' element={<Machine/>}></Route>
      <Route path='/inspection' element={<Leftbox/>}></Route>
      <Route path='/operator' element={<Table/>}></Route>
      <Route path='/inspector' element={<Lbox/>}></Route>     
      
     


     </Routes>
     </div>
  );
}
export default App;