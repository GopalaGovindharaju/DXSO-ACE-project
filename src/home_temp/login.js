import React from "react";
import './Ace-Electrical-Logo.png'

function Login(){
    return(
        <>
            <div className="row">
                <div className="col" style={{marginLeft: '30px', marginTop:'15px'}}>
                    <img src={require('./Ace-Electrical-Logo.png')} alt='logo' width='90' height='180'/> 
                </div>
                <div className="col">
                    
                </div>
            </div>
        </>
    );
}
export default Login;