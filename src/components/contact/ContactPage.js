import React, { Component } from 'react'
import Breadcrumb from '../Layout/Breadcrumb';
import { Prompt } from 'react-router-dom';
export default class ContactPage extends Component {

	constructor(props) {
		super(props);
		debugger;
		this.state = {
			user: {
				name: "John Doe",
				email: "test@test.com",
				subject: "Please answer me",
				message: "I want a quotation"
			},
			feedback: undefined,
			sending: false,
			preventExit: false
		};
	}

	

	handleSubmit = (e) => {
		e.preventDefault();


		// fetch("https://3wwy9pnc6d.execute-api.us-east-1.amazonaws.com/PRD/contact/newmessage", {
		// 	method: 'POST', // *GET, POST, PUT, DELETE, etc.
		// 	mode: 'cors', // no-cors, *cors, same-origin
		// 	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		// 	credentials: 'same-origin', // include, *same-origin, omit
		// 	headers: {
		// 	  'Content-Type': 'application/json'
		// 	  // 'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	redirect: 'follow', // manual, *follow, error
		// 	referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		// 	body: JSON.stringify(this.state) // body data type must match "Content-Type" header
		//   }).then(r => {
		// 	  console.log(r);
			this.setState(prev => ({...prev, feedback: "Thanks for contacting us, we'll reply ASAP", sending: false, preventExit: false}));

		//   }).catch(err => {
		// 	  console.error(err);
		//   });
		  
	}

	handleInputChange(e) {

		const {name, value} = e.target;
		debugger;
		this.setState(previous => {
			let newState = {
				...previous,
				user: {
					...previous.user,
					[name]: value
				},
				preventExit: true				
			};

			return newState;
		});

	}

    render() {
        return (
            <React.Fragment>
                <Breadcrumb current={'Contact'}></Breadcrumb>
                <Prompt when={this.state.preventExit} message="You haven't submitted your inquiry, do you want to leave?"/>
            <div>
                <div className="contact w3-agileits">
					<div className="container">
						<h4 className="tittle-w3layouts">Contact Us</h4>
						<div className="contact-w3lsrow">
							<div className="contact-right">
								<form action="#" method="post" onSubmit={this.handleSubmit}>
									<input value={this.state.user.name} onChange={(e) => this.handleInputChange(e)} type="text" name="name" placeholder="Name" required=""/>
									<input value={this.state.user.email} onChange={(e) => this.handleInputChange(e)}  type="text" name="email" placeholder="Email" required=""/>
									<input value={this.state.user.subject} onChange={(e) => this.handleInputChange(e)}   type="text" name="subject" placeholder="Subject" required=""/>
									<textarea value={this.state.user.message} onChange={(e) => this.handleInputChange(e)}  name="message" placeholder="Message" required=""></textarea>
									<input type="submit" value={this.state.sending ? "SENDING...": "SEND"}/>
								</form>
								
									{
										(this.state.feedback && <div style={{margin: '10px 0'}} className='alert alert-success'>
																	{this.state.feedback}
																</div> )
									}
									
							</div>
							<div className="contact-left wthree">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9503398796587!2d-73.9940307!3d40.719109700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a27e2f24131%3A0x64ffc98d24069f02!2sCANADA!5e0!3m2!1sen!2sin!4v1441710758555" allowfullscreen></iframe>
								<div className="timings-w3ls">
									<h5>Appointment Days</h5>
									<ul>
										<li>Pediatric <span>Sun-Tue</span></li>
										<li>Gynaecology<span>Wed-Fri</span></li>
										<li>Cardiac<span>Sat-Mon</span></li>
									</ul>
								</div>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>
		
					<div className="container">
						<div className="w3agile_footer_grid">
							<div className="w3agile_footer_grid_left">
								<div className="w3agile_footer_grid_left1">
									<span className="glyphicon glyphicon-map-marker" aria-hidden="true"></span>
								</div>
								<h4>Fort McMurray, AB Canada.</h4>
							</div>
							<div className="w3agile_footer_grid_left">
								<div className="w3agile_footer_grid_left1">
									<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
								</div>
								<a href="mailto:info@example.com">info@example.com</a>
							</div>
							<div className="w3agile_footer_grid_left">
								<div className="w3agile_footer_grid_left1">
									<span className="glyphicon glyphicon-earphone" aria-hidden="true"></span>
								</div>
								<h4>+(1234) 012 132 312</h4>
							</div>
							<div className="clearfix"> </div>
						</div>
					</div>

				</div>
            </div>
            </React.Fragment>
        )
    }
}
