import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import Component3 from './planner_chitra/comp3_main';
import Cust_asset from './assest_harish/custasset.js';

function App() {
  return (
    <div className='App'>
    
    <Routes>
      <Route path='/' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
      <Route path='/cus' element={<Cust_asset/>}></Route>
     </Routes>
     </div>
  );
}
export default App;