import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Order from './component1/Order';
import {Routes, Route} from 'react-router-dom';
import Table from './component2/table2';

function App() {
  return (
    <div className='App'>
    <Routes>
     <Route path='/' element={<Order/>}></Route>
     <Route path='operator' element={<Table/>}></Route>
     <Route path='inspection' element={<Table/>}></Route>
     <Route path='inspector' element={<Table/>}></Route>
     </Routes>
     </div>
  );
}
export default App;