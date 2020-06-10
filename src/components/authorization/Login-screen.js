import React from 'react';

import SignIn from './sign-in.js';
import LogIn from './Log-in.js';

class LoginScreen extends React.Component {
    state = {
        userAuthorized: false
    }

    toCreateUser = async user => {
        console.log('Юзер функция сработала');
        const request = await fetch('https://afternoon-falls-25894.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        const response = await request.json();
        if (response.status === 200) {
            this.setState({
                userAuthorized: true
            })
            localStorage.setItem('userData', JSON.stringify(user));
        } else {
            
        }
        
        
        console.log(localStorage['userData']);
    };

    toLoginEventFunction() {
        const userInfo = {
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        const userEmail = userInfo.email;
        const userPassword = userInfo.password;
        console.log('event');
        if ((/[A-Z]+/g.test(userPassword) && /[0-9]+/g.test(userPassword) && /[a-z]+/g.test(userPassword) && /[+-_@$!%*?&#.,;:[\]{}]+/g.test(userPassword)) && /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(userEmail)) {
            console.log(true);
            //this.toCreateUser.call(this, userInfo);
            this.toCreateUser(userInfo);
        }
    }

    render() {
        let modal;
        if (this.state.userAuthorized) {
            modal = <SignIn toLoginEventFunction={this.toLoginEventFunction.bind(this)} />;
        } else {
            modal = <LogIn toLoginEventFunction={this.toLoginEventFunction.bind(this)} />;
        }
        return (
            <div>
                {modal}
            </div>
        )
    }
}

export default LoginScreen;



/*export default props => {
    return (
    <div className="login-screen">
        <div className="login-screen__popup">
        <p className="login-screen__title"><b>login</b></p>
        <input id="email" className="login-screen__input" type="text" placeholder=""/>
        <input id="password" className="login-screen__input" type="text" placeholder=""/>

        <button className="login-screen__button" onClick={props.toLoginEventFunction}>LOGIN</button>
        </div>
    </div>
    )
}*/


/**
 *
 * const
 */