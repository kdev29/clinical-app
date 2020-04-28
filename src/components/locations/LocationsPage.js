import React from 'react'
import Breadcrumb from '../Layout/Breadcrumb'

const LocationsPage = () => {
    return (
        <>
        <Breadcrumb current={'Locations'}></Breadcrumb>
        
        
        <div className="locations-w3-agileits">
	<div className="container">
	<div className="location-agileits">
		<div className="loc-left">
			<h4>Address 1 :</h4>
			<p>Hospital Pkwy</p>
			<p>San Jose, CA USA</p>
			<p>Telephone : +2 00 544 6035</p>
			<p>FAX : +1 500 889 5432</p>
			<p>Email : <a href="mailto:example@email.com">mail@example.com</a></p>
		</div>
		<div className="loc-right">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.3473567635015!2d-121.80431848469776!3d37.23946527986051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e2e2f769431fd%3A0xa9f4531fc4654b6e!2sHospital+Pkwy%2C+San+Jose%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1488173775953"></iframe>
		</div>
		<div className="clearfix"> </div>
	</div>
	<div className="location-agileits">
		
		<div className="loc-right">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2645.524697655473!2d-123.43559468427799!3d48.465648479251044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548f72e6f015c0e1%3A0x9ee24b6bd060938e!2sHospital+Way%2C+Victoria%2C+BC%2C+Canada!5e0!3m2!1sen!2sin!4v1488173899738"></iframe>
		</div>
		<div className="loc-left">
			<h4>Address 2 :</h4>
			<p>Hospital Way</p>
			<p>Victoria, BC Canada</p>
			<p>Telephone : +2 00 544 6035</p>
			<p>FAX : +1 500 889 5432</p>
			<p>Email : <a href="mailto:example@email.com">mail@example.com</a></p>
		</div>
		<div className="clearfix"> </div>
	</div>
	<div className="location-agileits">
		<div className="loc-left">
			<h4>Address 3 :</h4>
			<p>University Hospital</p>
			<p>4056 Basel, Switzerland</p>
			<p>Telephone : +2 00 544 6035</p>
			<p>FAX : +1 500 889 5432</p>
			<p>Email : <a href="mailto:example@email.com">mail@example.com</a></p>
		</div>
		<div className="loc-right">
			<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1398467.8906758407!2d7.103157169464006!3d46.79676886804696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9a8781d7953%3A0xbfce93648896fd9f!2sBasel+University+Hospital!5e0!3m2!1sen!2sin!4v1488174074845"></iframe>
		</div>
		<div className="clearfix"> </div>
	</div>
	</div>
</div>
</>
    );
}

export default LocationsPage;