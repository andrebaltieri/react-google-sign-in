import React from 'react';

const LoginButton = ({ onSignIn }) => {
    return (
        <button className="btn btn-danger btn-lg" onClick={onSignIn}>
            <i className="fa fa-google"></i>&nbsp;&nbsp;&nbsp;
            Login com Google
        </button>
    );
}

export default LoginButton;