import'./component.css';
import './download.png';
import Disp from "../home_gokul/one";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function Icon()
{
    const navigate = useNavigate();
    const home = () => {
      navigate("/");
    };
    return(
        <div>
            <Routes>
                <Route path="/" component={Disp}></Route>
            </Routes>
            <button id="qq" className='home-button' onClick={home}  style={{ marginLeft: '20px', marginTop: '7px' }}><img src={require('./download.png')} alt="home" className="home-icon" width="50" height="50" style={{justifyContent:'left'}} /></button>         
        </div>
    )
}

export default Icon;