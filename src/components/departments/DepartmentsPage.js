import React, { Component } from 'react'
import Breadcrumb from '../Layout/Breadcrumb';

class DepartmentsPage extends Component {
    render() {
        return (
			<>
			<Breadcrumb current='Departments' ></Breadcrumb>
            <div className="gallery w3-agileits">  
		<div className="container">
			<h4 className="tittle-w3layouts">Our Departments</h4>   
			<div className="agileinfo-gallery-row">
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g1.jpg" className="img-response" alt="" title="Dental"/> 
						<div className="agile-figcaption">
						  <h4>Dental</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div> 
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g2.jpg" alt="" className="img-response" title="Pediatric"/> 
						<div className="agile-figcaption">
						  <h4>Pediatric</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g3.jpg" alt="" className="img-response" title="Dental"/> 
						<div className="agile-figcaption">
						  <h4>Dental</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="images/g4.jpg" className="imghvr-hinge-right wthree">
						<img src="images/g4.jpg" alt="" className="img-response" title="ENT"/> 
						<div className="agile-figcaption">
						  <h4>ENT</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g5.jpg" alt="" className="img-response" title="Gynaecology"/> 
						<div className="agile-figcaption">
						  <h4>Gynaecology</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div> 
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g6.jpg" alt="" className="img-response" title="Dermatology"/> 
						<div className="agile-figcaption">
						  <h4>Dermatology</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g7.jpg" alt="" className="img-response" title="Orthopedic"/> 
						<div className="agile-figcaption">
						  <h4>Orthopedic</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g8.jpg" alt="" className="img-response" title="Cardiac"/> 
						<div className="agile-figcaption">
						  <h4>Cardiac</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				<div className="col-md-4 col-sm-4 col-xs-6 w3gallery-grids">
					<a href="#" className="imghvr-hinge-right wthree">
						<img src="images/g9.jpg" alt="" className="img-response" title="Pediatric"/> 
						<div className="agile-figcaption">
						  <h4>Pediatric</h4>
						  <p>Phasellus elementum ullamcorper urna, eu rhoncus.</p>
						</div>
					</a> 
				</div>
				
				<div className="clearfix"> </div>
			</div> 
		</div>
	</div>
			</>
        )
    }
}

export default DepartmentsPage;