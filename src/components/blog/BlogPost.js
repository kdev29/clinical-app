import React, { Component } from 'react'
import Breadcrumb from '../Layout/Breadcrumb'

export default class BlogPost extends Component {
    render() {
        return (
            <>
            <Breadcrumb current={'Details'}></Breadcrumb>
                <div className="blog">
			
			<div className="container">
			
				<div className="col-md-4 blog-top-right-grid">
					<div className="Categories stand-w3ls">
						<h3>Recent News</h3>
						<ul>
							<li><a href="#">Ultrasmall nanoparticles kill cancer cells in unusual way</a><span className="glyphicon glyphicon glyphicon-time" aria-hidden="true"> May 2017</span></li>
							<li><a href="#">Eye lens regeneration from own stem cells </a><span className="glyphicon glyphicon glyphicon-time" aria-hidden="true"> June 2017</span></li>
						</ul>
					</div>
					<div className="Categories move-w3ls">
						<h3>Clinical Care Services</h3>
						<ul className="marked-list offs1">
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">General and Preventive Care</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Cosmetic Solutions</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#"> Routine Medical Care</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Additional Treatments</a> </li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Orthodontics</a></li>    
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Dentures & Denture Repair</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Diagnostic & Preventive</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Diagnostic Imaging</a> </li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Pediatric Dentistry</a></li>
							<li><span className="glyphicon glyphicon glyphicon-chevron-right" aria-hidden="true"></span><a href="#">Gastroenterology</a></li>                          
						</ul>
					</div>
				</div>
				<div className="col-md-8 blog-top-left-grid">
					<div className="left-blog left-single">
						<div className="blog-left">
							<div className="single-left-left">
								<p>Posted By <a href="#">Admin</a> &nbsp;&nbsp; on Feb 28, 2017 &nbsp;&nbsp; <a href="#">Comments (10)</a></p>
								<img src="/images/b1.jpg" alt="" />
							</div>
							<div className="blog-left-bottom">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin 
									dignissim. Phasellus ultrices tellus eget ipsum ornare molestie scelerisque eros dignissim. Phasellus 
									fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
								</p>
							</div>
							<div className="blog-left-bottom left-bottom">
								<p> Phasellus fringilla hendrerit lectus nec vehicula. ultrices tellus eget ipsum ornare consectetur adipiscing elit.Sed blandit .
								</p>
							</div>
						</div>
						
						<div className="response">
							<h3>Responses</h3>
							<div className="media response-info">
								<div className="media-left response-text-left">
									<a href="#">
										<img className="media-object" src="/images/t1.jpg" alt=""/>
									</a>
									<h5><a href="#">Admin</a></h5>
								</div>
								<div className="media-body response-text-right">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available, 
										sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<ul>
										<li>Feb 28, 2017</li>
										<li><a href="single.html">Reply</a></li>
									</ul>
									<div className="media response-info">
										<div className="media-left response-text-left">
											<a href="#">
												<img className="media-object" src="/images/t2.jpg" alt=""/>
											</a>
											<h5><a href="#">Admin</a></h5>
										</div>
										<div className="media-body response-text-right">
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available, 
												sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											<ul>
												<li>Mar 21, 2017</li>
												<li><a href="single.html">Reply</a></li>
											</ul>		
										</div>
										<div className="clearfix"> </div>
									</div>
								</div>
								<div className="clearfix"> </div>
							</div>
							<div className="media response-info">
								<div className="media-left response-text-left">
									<a href="#">
										<img className="media-object" src="/images/t3.jpg" alt=""/>
									</a>
									<h5><a href="#">Admin</a></h5>
								</div>
								<div className="media-body response-text-right">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,There are many variations of passages of Lorem Ipsum available, 
										sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									<ul>
										<li>Mar 31, 2017</li>
										<li><a href="single.html">Reply</a></li>
									</ul>		
								</div>
								<div className="clearfix"> </div>
							</div>
						</div>
						
						<div className="opinion">
							<h3>Leave your comment</h3>
							<form action="#" method="post">
								<input type="text" name="Name" placeholder="Name" required=""/>
								<input type="email" name="Email" placeholder="Email" required=""/>
								<textarea name="Message" placeholder="Message" required=""></textarea>
								<input type="submit" value="SEND" />
							</form>
						</div>
					</div>
				</div>
				<div className="clearfix"> </div>
			</div>
			
	</div>
            </>
        )
    }
}
