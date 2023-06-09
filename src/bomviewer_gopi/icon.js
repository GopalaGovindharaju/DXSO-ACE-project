import'./component.css';
import './download.png';

function Icon()
{
    return(
        <div>
            <button className='home-button' style={{ marginLeft: '0px', marginTop: '7px' }}><img src={require('./download.png')} alt="home" className="home-icon" width="50" height="50" style={{justifyContent:'left'}} /></button>         
        </div>
    )
}

export default Icon;