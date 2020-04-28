import React, { Component } from 'react';
import Slider from './main/Slider'
import { Carousel } from 'react-responsive-carousel';
import { Redirect } from 'react-router-dom'
// import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class About extends Component {

	constructor(props){
		super(props);
		this.state = {
			redirect : false,
			location: ''
		}
	}

	handleSectionClick = (e, thelocation) => {
		e.preventDefault();
		
		this.setState({
			redirect: true,
			location: thelocation
		});
	}
	
    render() {
        return (
			<>
			{
				this.state.redirect && (<Redirect to={this.state.location}/>)
			}
            <div>
                <div className="who-we-w3ls">
   <div className="container">
		<h4 className="tittle-w3layouts">Who we are</h4>
		<div className="who-left-agileits">
			<div className="left-img-w3">
			</div>
			<div className="clearfix"> </div>
		</div>
		<div className="who-right-agileits">
			<div className="panel-group w3l_panel_group_faq" id="accordion" role="tablist" aria-multiselectable="true">
			  <div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingOne">
				  <h4 className="panel-title asd">
					<a className="pa_italic" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Who we are
					</a>
				  </h4>
				</div>
				<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
				  <div className="panel-body panel_text">
					Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
				  </div>
				</div>
			  </div>
			  <div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingTwo">
				  <h4 className="panel-title asd">
					<a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>What we do
					</a>
				  </h4>
				</div>
				<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
				   <div className="panel-body panel_text">
					Lorem Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
				  </div>
				</div>
			  </div>
			  <div className="panel panel-default">
				<div className="panel-heading" role="tab" id="headingThree">
				  <h4 className="panel-title asd">
					<a className="pa_italic collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					  <span className="glyphicon glyphicon-plus" aria-hidden="true"></span><i className="glyphicon glyphicon-minus" aria-hidden="true"></i>Why choose us?
					</a>
				  </h4>
				</div>
				<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
				   <div className="panel-body panel_text">
					Lorem Amet quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia.
				  </div>
				</div>
				
			  </div>
			</div>
			<div className="who-right2-agileits">
				<h5 className="subtittle-w3layouts">Clinical Care is the premier health care centre focused on delivering the highest quality care</h5>
				<p className="para-wthree">Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
			</div>
			<div className="clearfix"> </div>
		</div>
		<div className="clearfix"> </div>
		</div>
</div>

	<div className="stats jarallax" id="stats">
	  <div className="agile_overlay2">
	    <div className="container"> 
		<div className="agileits_heading_section">
				<h4 className="tittle-w3layouts white">25 years of trusted care</h4>
			</div>
			<div className="inner_w3l_agile_grids">
		<div className="w3layouts_stats_left w3_counter_grid">
		    <i className="fa fa-medkit" aria-hidden="true"></i>
			<p className="counter">1,546</p>
			<h3>Nursing Services</h3>
		</div>
		<div className="w3layouts_stats_left w3_counter_grid1">
		    <i className="fa fa-stethoscope" aria-hidden="true"></i>
			<p className="counter">2870</p>
			<h3>Medical Treatments</h3>
		</div>
		<div className="w3layouts_stats_left w3_counter_grid2">
		<i className="fa fa-user-md" aria-hidden="true"></i>
			<p className="counter">750</p>
			<h3>Qualified Doctors</h3>
		</div>
		<div className="w3layouts_stats_left w3_counter_grid3">
		<i className="fa fa-hospital-o" aria-hidden="true"></i>
			<p className="counter">200</p>
			<h3>Departments</h3>
		</div>
		<div className="clearfix"> </div>
	</div>
   </div>	
</div>
</div>

<div className="projects">
   <div className="container">
	  <div className="projects-inner">
	  <div className="ban-text">
					   <div className="choose">
							<div className="choose_img">
								 <h4 className="tittle-w3layouts white">Facilities we offer</h4>
								  
								   <div className="choose_icon">
										<div className="choose_left">
											<i className="fa fa-user-md" aria-hidden="true"></i>
										</div>
											<div className="choose_right">
												<h3>CHILDREN CARE CENTER</h3>
												<p>Lorem Ipsum is simply dummy text of the printing and
												typesetting industry.</p>
											</div>
										<div className="clearfix"></div>
									 </div>
								 
								  
								  <div className="choose_icon">
									<div className="choose_left">
										<i className="fa fa-heart" aria-hidden="true"></i>
									</div>
									<div className="choose_right">
										<h3>ANYTIME BLOOD BANK</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.</p>
									</div>
									<div className="clearfix"></div>
								 </div>
								 
								  
								  <div className="choose_icon">
									<div className="choose_left">
										<i className="fa fa-medkit" aria-hidden="true"></i>
									</div>
									<div className="choose_right">
										<h3>LARGE LABORATORY</h3>
										<p>Lorem Ipsum is simply dummy text of the printing and
										typesetting industry.</p>
									</div>
									<div className="clearfix"></div>
								 </div> 
							</div>
						</div>
					</div>
	    <div className="banner-slider">
							<div className="callbacks_container">
								<ul className="rslides" id="slider">
									<li>
									  <div className="blog-img">
									  </div>
								
									</li>
								
								</ul>
						  </div>
					</div>
					
		
					
					<div className="clearfix"></div>
				</div>
				

<div className="w3ls_popular_posts">
					<h4 className="tittle-w3layouts">Recent News</h4>
					<div className="agileits_popular_posts_grid">
						<div className="w3agile_special_deals_grid_left_grid">
							<a onClick={(e) => this.handleSectionClick(e, '/blog/1')}  href="single.html"><img src="images/p1.jpg" className="img-responsive" alt="" /></a>
						</div>
						<h4><a onClick={(e) => this.handleSectionClick(e, '/blog/1')}  href="single.html">Ultrasmall nanoparticles kill cancer cells in unusual way</a></h4>
						<h5><i className="fa fa-calendar" aria-hidden="true"></i>July 15,2017</h5>
					</div>
					<div className="agileits_popular_posts_grid">
						<div className="w3agile_special_deals_grid_left_grid">
								<a onClick={(e) => this.handleSectionClick(e, '/blog/1')} href="single.html"><img src="images/p2.jpg" className="img-responsive" alt="" /></a>
							</div>
						<h4><a onClick={(e) => this.handleSectionClick(e, '/blog/1')}  href="single.html">Eye lens regeneration from own stem cells</a></h4>
						<h5><i className="fa fa-calendar" aria-hidden="true"></i>June 12,2017</h5>
					</div>
					<div className="agileits_popular_posts_grid">
						<div className="w3agile_special_deals_grid_left_grid">
								<a onClick={(e) => this.handleSectionClick(e, '/blog/1')}  href="single.html"><img src="images/p3.jpg" className="img-responsive" alt="" /></a>
						</div>
						<h4><a  onClick={(e) => this.handleSectionClick(e, '/blog/1')} href="single.html">Ultrasmall nanoparticles kill cancer cells in unusual way</a></h4>
						<h5><i className="fa fa-calendar" aria-hidden="true"></i>May 02,2017</h5>
					</div>
				</div>				
		 </div>
		 </div>
            </div>
			</>
        )
    }
}
