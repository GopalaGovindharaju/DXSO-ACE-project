import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';
import Component3 from './planner_chitra/comp3_main';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Comp/>}></Route>
      <Route path='/planner' element={<Component3/>}></Route>
     </Routes>
     </div>
  );
}
export default App;