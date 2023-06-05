import'./component.css';
import './download.png';

function Icon()
{
    return(
        <div>
            <button className='home-button' style={{ marginLeft: '30px', marginTop: '20px' }}><img src={require('./download.png')} alt="home" className="home-icon" width="30" height="30" /></button>
            
           
            </div>
    )
}

export default Icon;