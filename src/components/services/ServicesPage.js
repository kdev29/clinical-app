import React  from 'react'
import Breadcrumb from '../Layout/Breadcrumb'

const ServicesPage = () => {
    return(
        <>
            <Breadcrumb current={'Services'}></Breadcrumb>
        
            <div className="services-w3-agileits">
                <div className="container">
                <h4 className="tittle-w3layouts">Providing total healthcare solutions</h4>
                    <div className="services-grids">
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <h4>Cardiology</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="services-grids">
                        <i className="fa fa-medkit" aria-hidden="true"></i>
                        <h4>Dental care</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="services-grids">
                        <i className="fa fa-wheelchair" aria-hidden="true"></i>
                        <h4>Neurology</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="services-grids">
                        <i className="fa fa-user-md" aria-hidden="true"></i>
                        <h4>Cosmetic Solutions</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="services-grids">
                        <i className="fa fa-user" aria-hidden="true"></i>
                        <h4>ENT treatment</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="services-grids">
                        <i className="fa fa-ambulance" aria-hidden="true"></i>
                        <h4>Additional treatments</h4>
                        <p>Vivamus fermentum ex quis imperdiet sodales.</p>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </>
    );
}

export default ServicesPage;