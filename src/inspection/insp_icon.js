import'../bomviewer_gopi/component.css';
import '../bomviewer_gopi/download.png';

function Icon()
{
    return(
        <div>
            <button id="qq" className='home-button' style={{ marginLeft: '20px', marginTop: '7px' }}><img src={require('./download.png')} alt="home" className="home-icon" width="50" height="50" style={{justifyContent:'left'}} /></button>         
        </div>
    )
}

export default Icon;