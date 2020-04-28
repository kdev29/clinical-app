import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Slider from './main/Slider';

export default class MainPage extends Component {

    state = {
        redirect: false,
        location: '/'
    }

    handleRedirect = (e, destination) => {
        e.preventDefault();
        
        this.state = this.setState({redirect: true, location: destination});
    }

    render() {
        return (
            <>
            {
                this.state.redirect && (<Redirect to={this.state.location} ></Redirect>)
            }
            <div>
                <Slider></Slider>            
            </div>
            <div className="banner-bottom">
            <div className="bnr-btm-grids-agileits">
                <div className="bnr-btm-icon">
                    <i className="fa fa-mobile" aria-hidden="true"></i>
                </div>
                <div className="bnr-btm-info">
                    <h3>Give  us a call</h3>
                    <p>+(012) 345 6789 </p>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="bnr-btm-grids-agileits">
                <div className="bnr-btm-icon">
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>
                <div className="bnr-btm-info">
                    <h3>Send us a message</h3>
                    <p><a href="mailto:info@example.com">example@mail.com</a></p>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="bnr-btm-grids-agileits">
                <div className="bnr-btm-icon">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                </div>
                <div className="bnr-btm-info">
                    <h3>Visit our location</h3>
                    <p>Fort McMurray, AB Canada.</p>
                </div>
                <div className="clearfix"> </div>
            </div>
            <div className="clearfix"></div>
        </div>
        
        <div className="options-wthree">
            <div className="container">
                <ul>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/appointments')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Appointments</h6>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/doctors')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-stethoscope" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Doctors</h6>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/services')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-ambulance" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Services</h6>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/departments')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-user-md" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Departments</h6>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/locations')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Locations</h6>
                        </div>
                    </a>
                    </li>
                    <li>
                    <a onClick={(e) => { this.handleRedirect(e, '/contact')}} className="opt-grids">
                        <div className="icon-agileits-w3layouts">
                            <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                        <div className="opt-text-w3layouts">
                            <h6>Contact</h6>
                        </div>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
            </>
        )
    }
}
