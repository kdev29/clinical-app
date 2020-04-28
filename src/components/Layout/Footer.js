import React from 'react';
import { Redirect } from 'react-router-dom';

class Footer extends React.Component {

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
				
				this.state.redirect && (<Redirect to={this.state.location} />)
			}
                <div className="social-agileinfo">
	<a href="#"  className="social-icon-w3-agile facebook">
		<i className="fa fa-facebook" aria-hidden="true"></i>
	</a>
	<a href="#"  className="social-icon-w3-agile google-plus">
		<i className="fa fa-google-plus" aria-hidden="true"></i>
	</a>
	<a href="#" className="social-icon-w3-agile twitter">
		<i className="fa fa-twitter" aria-hidden="true"></i>
	</a>
	<a href="#" className="social-icon-w3-agile rss">
		<i className="fa fa-rss" aria-hidden="true"></i>
	</a>
	<div className="clearfix"></div>
</div>
            <div className="footer">
		<div className="agileinfo_footer_bottom">
			<div className="container">
				<div className="col-md-3 agileinfo_footer_bottom_grid">
					<h2>About <span>Us</span></h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque 
						id arcu neque, at convallis est felis.</p>
					<ul className="social-nav model-3d-0 footer-social w3_agile_social">
						<li><a href="#" className="facebook">
							  <div className="front"><i className="fa fa-facebook" aria-hidden="true"></i></div>
							  <div className="back"><i className="fa fa-facebook" aria-hidden="true"></i></div></a></li>
						<li><a href="#" className="twitter"> 
							  <div className="front"><i className="fa fa-twitter" aria-hidden="true"></i></div>
							  <div className="back"><i className="fa fa-twitter" aria-hidden="true"></i></div></a></li>
						<li><a href="#" className="instagram">
							  <div className="front"><i className="fa fa-instagram" aria-hidden="true"></i></div>
							  <div className="back"><i className="fa fa-instagram" aria-hidden="true"></i></div></a></li>
						<li><a href="#" className="pinterest">
							  <div className="front"><i className="fa fa-linkedin" aria-hidden="true"></i></div>
							  <div className="back"><i className="fa fa-linkedin" aria-hidden="true"></i></div></a></li>
					</ul>
				</div>
				<div className="col-md-3 agileinfo_footer_bottom_grid">
					<h3>The <span>Tags</span></h3>
					<div className="unorder">
						<ul className="tag2 tag_agileinfo">
							<li><a onClick={(e) => this.handleSectionClick(e, '/doctors')} href="/doctors">Doctors</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/about')} href="about.html">About</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/departments')} href="departments.html">Departments</a></li>
						</ul>
						<ul className="tag2 tag_agileinfo">
							<li><a onClick={(e) => this.handleSectionClick(e, '/locations')} href="locations.html">Locations</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/services')} href="services.html">Services</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/doctors')} href="appointment.html">Doctors</a></li>
						</ul>
						<ul className="tag2 tag_agileinfo">
							<li><a onClick={(e) => this.handleSectionClick(e, '/more')} href="single.html">More</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/about')} href="about.html">About</a></li>
							<li><a onClick={(e) => this.handleSectionClick(e, '/departments')} href="departments.html">Departments</a></li>
						</ul>
						
					</div>
				</div>
				<div className="col-md-3 agileinfo_footer_bottom_grid">
					<h3>Latest <span>Tweets</span></h3>
					<ul className="twi agileits_twitter">
						<li><i className="fa fa-twitter" aria-hidden="true"></i>Praesent imperdiet diam sagittis, egestas <a href="#" className="mail">
						@http://t.co/9vslJFpW</a> <span>ABOUT 15 MINS</span></li>
						<li><i className="fa fa-twitter" aria-hidden="true"></i>Mauris tristique, dolor vel iaculis vestibulum<a href="#" className="mail">
						@http://t.co/9vslJFpW</a> <span>ABOUT 2 HOURS AGO</span></li>
					</ul>
				</div>
				<div className="col-md-3 agileinfo_footer_bottom_grid">
					<h3>Flickr <span>Feed</span></h3>
					<div className="flickr-grids">
						<div className="flickr-grid agileits_w3layouts_flickr">
							<a onClick={(e) => this.handleSectionClick(e, '/blog/')}  href="single.html"><img src="images/1.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="flickr-grid  agileits_w3layouts_flickr">
							<a href="single.html"><img src="images/2.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="flickr-grid  agileits_w3layouts_flickr">
							<a href="single.html"><img src="images/3.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="clearfix"> </div>
						
						<div className="flickr-grid  agileits_w3layouts_flickr">
							<a href="single.html"><img src="images/4.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="flickr-grid  agileits_w3layouts_flickr">
							<a href="single.html"><img src="images/1.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="flickr-grid  agileits_w3layouts_flickr">
							<a href="single.html"><img src="images/2.jpg" alt=" " className="img-responsive" /></a>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
		</div>
		<div className="agileinfo_footer_bottom1">
                <div className="container">
                        <p>© 2017 Clinical Care. All rights reserved | Design by <a target='_blank' href="http://w3layouts.com">W3layouts</a></p>
                    <div className="clearfix"> </div>
                </div>
            </div>
	</div>
            </>
            
        );
    }
}

export default Footer;