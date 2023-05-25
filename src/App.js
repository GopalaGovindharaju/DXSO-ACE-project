import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './component1/Banner';
import Order from './component1/Order';
import Gridlay from './component1/BOMDetails';

function App() {
  return (
    <div className='App'>
     <Banner/>
     <Order/>
     <Gridlay/>
     </div>
  );
}
export default App;