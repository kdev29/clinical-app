import React, { Component } from 'react'

export default class Login extends Component {

    handleSubmit = (e) => {
		e.preventDefault();
	}

    render() {
        return (
            <div>
                <div className="modal about-modal w3-agileits fade" id="myModal2" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
                        </div> 
                        <div className="modal-body login-page ">     
                                    <div className="login-top sign-top">
                                    <div className="agileits-login">
                                    <h5>Login</h5>
                                    <form onSubmit={this.handleSubmit} action="#" method="post">
                                        <input type="email" className="email" name="Email" placeholder="Email" required=""/>
                                        <input type="password" className="password" name="Password" placeholder="Password" required=""/>
                                        <div className="wthree-text"> 
                                        <ul> 
                                            <li>
                                            <label className="anim">
                                                <input type="checkbox" className="checkbox" />
                                                <span> Remember me ?</span> 
                                            </label> 
                                            </li>
                                            <li> <a href="#">Forgot password?</a> </li>
                                        </ul>
                                        <div className="clearfix"> </div>
                                        </div>  
                                        <div className="w3ls-submit"> 
                                        <input type="submit" value="LOGIN" />  	
                                        </div>	
                                    </form>

                                    </div>  
                                    </div>
                            </div>  
                        </div> 
                        </div>
                </div>
            </div>
        )
    }
}
