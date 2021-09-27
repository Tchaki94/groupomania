import React from 'react';
import Navbar from '../components/Navbar';


const Auth = (props) => {
    return (
        <div className="auth">
            <Navbar />
            <h1>Authentification</h1>
            {props.children}
        </div>
    );
};

export default Auth;