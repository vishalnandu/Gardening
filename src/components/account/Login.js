import React, { Component } from 'react'
import login from '../../components/account/login.svg'

export class Login extends Component {
    
    render() {
        return (
            <div className="base-container">
                <div className="header">Login</div>
                <div className="content">
                 <div className="image">
                     <img alt="login logo" src={login}></img>
                 </div>
                 <div className="form">
                     <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" placeholder="username"></input> 
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password" name="password" placeholder="password"></input> 
                     </div>
                     </div>   
                </div>
                <div className="footer">
                    <button type="submit" className="btn">Login</button>
                </div>
            </div>
        )
    }
}
