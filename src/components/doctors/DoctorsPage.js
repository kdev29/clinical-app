import React, { Component } from 'react';
import Breadcrumb from '../Layout/Breadcrumb';
import { Link } from 'react-router-dom';

const doctorsSummary = [
    { name: '', speciality: '', abstract: '', image: ''}
]

export default () => {
    
        return (
            <React.Fragment>
            <Breadcrumb current={'Doctor'}></Breadcrumb>
            <div className="blog" id="blog">
                <div className="container">
                <h4 className="tittle-w3layouts">Meet our physicians</h4>
                    <div className="blog-grid-w3-agileits">
                        <div className="blog-img1-agileits-w3layouts">
                        </div>
                        <div className="blog-info-w3layouts">
                            <h6>Dr. Julia Jameson</h6>
                            <div className="inner-info">
                                <h3>Pediatrist</h3>
                                <p className="para-wthree">Aenean pulvinar diam vel felis volutpat dictum. Aenean ac tellus suscipit sapien scelerisque tempus non mollis massa.</p>
                            </div>
                         
                            <Link className="blog-more-agile" to='/doctors/julia'>Read more</Link>
                        
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="blog-grid-w3-agileits">
                        <div className="blog-img2-agileits-w3layouts">
                        </div>
                        <div className="blog-info-w3layouts">
                            <h6>Dr. Max Turner</h6>
                            <div className="inner-info">
                                <h3>Cardiologist</h3>
                                <p className="para-wthree">Aenean pulvinar diam vel felis volutpat dictum. Aenean ac tellus suscipit sapien scelerisque tempus non mollis massa.</p>
                            </div>
                            <Link className="blog-more-agile" to='/doctors/julia'>Read more</Link>
                        
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="blog-grid-w3-agileits">
                        <div className="blog-info-w3layouts second-info">
                            <h6>Dr. Amy Adams</h6>
                            <div className="inner-info">
                                <h3>Faculty Physician</h3>
                                <p className="para-wthree">Aenean pulvinar diam vel felis volutpat dictum. Aenean ac tellus suscipit sapien scelerisque tempus non mollis massa.</p>
                            </div>
                            <Link className="blog-more-agile" to='/doctors/julia'>Read more</Link>
                        
                        </div>
                        <div className="blog-img3-agileits-w3layouts">
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="blog-grid-w3-agileits">
                        <div className="blog-info-w3layouts second-info">
                            <h6>Dr. Lacy Smith</h6>
                            <div className="inner-info">
                                <h3> Anesthetist </h3>
                                <p className="para-wthree">Aenean pulvinar diam vel felis volutpat dictum. Aenean ac tellus suscipit sapien scelerisque tempus non mollis massa.</p>
                            </div>
                            <Link className="blog-more-agile" to='/doctors/julia'>Read more</Link>
                        
                        </div>
                        <div className="blog-img4-agileits-w3layouts">
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )    
}
