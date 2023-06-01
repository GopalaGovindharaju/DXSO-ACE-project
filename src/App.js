import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './component0/basicplan';
import {Routes, Route} from 'react-router-dom';
import Table from './component2/table2';
import Leftcolumn from './component3/leftbox';
import Lbox from './component4/lbox';
import Browse from './component0/browse';
import Order1 from './component1/Order';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Order/>}></Route>
      <Route path='/planner' element={<Order1/>}></Route>
     <Route path='operator' element={<Table/>}></Route>
     <Route path='inspection' element={<Leftcolumn/>}></Route>
     <Route path='inspector' element={<Lbox/>}></Route>
     </Routes>
     </div>
  );
}
export default App;