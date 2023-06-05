import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import Comp from './bomviewer_gopi/comp_main';

function App() {
  return (
    <div className='App'>
    <Routes>
      <Route path='/' element={<Comp/>}></Route>
     </Routes>
     </div>
  );
}
export default App;