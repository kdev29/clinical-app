import React, { Component } from 'react'

export default class Register extends Component {

	handleSubmit = (e) => {
		e.preventDefault();
	}


    render() {
        return (
            <div className="modal about-modal w3-agileits fade" id="myModal3" tabIndex="-1" role="dialog">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>						
				</div> 
				<div className="modal-body login-page ">  
									<div className="login-top sign-top">
										<div className="agileits-login">
										<h5>Register</h5>
										<form action="#" onSubmit={this.handleSubmit} method="post">
											<input type="text" name="Username" placeholder="Username" required=""/>
											<input type="email"  name="Email" placeholder="Email" required=""/>
											<input type="password" name="Password" placeholder="Password" required=""/>
											<div className="wthree-text"> 
												<ul> 
													<li>
														<label className="anim">
															<input type="checkbox" className="checkbox" />
															<span> I accept the terms of use</span> 
														</label> 
													</li>
												</ul>
												<div className="clearfix"> </div>
											</div>  
											<div className="w3ls-submit"> 
												<input type="submit" value="Register" />  	
											</div>	
										</form>

										</div>  
									</div>
						</div>  
				</div> 
			</div>
		</div>
        );
    }
    
}
