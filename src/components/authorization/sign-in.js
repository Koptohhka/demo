import React from 'react';

export default (props) => {
    return (
        <div className="login-screen">
            <div className="login-screen__popup">
                <p className="login-screen__title"><b>Signin</b></p>
                <input id="email" className="login-screen__input" type="text" placeholder="" />
                <input id="password" className="login-screen__input" type="text" placeholder="" />

                <button className="login-screen__button" onClick={props.toLoginEventFunction}>LOGIN</button>
            </div>
        </div>
    )
};