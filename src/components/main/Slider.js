import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



const SimpleSlider = () => (

    <Carousel infiniteLoop={true} autoPlay={true} interval={5000} showThumbs={false}>
            <div style={{minHeight: '200px'}}>
                <img style={{width:'auto', height:"100%"}} src="/images/banner.jpg" />
                <p className="legend">Qualified doctors</p>
            </div>
           
            <div style={{minHeight: '200px'}}>
                <img style={{width:'auto', height:"100%"}} src="/images/banner2.jpg" />
                <p className="legend">Qualified doctors</p>
            </div>
           
            <div style={{minHeight: '200px'}}>
                <img style={{width:'auto', height:"100%"}} src="/images/banner1.jpg" />
                <p className="legend">Qualified doctors</p>
            </div>
           
            <div style={{minHeight: '200px'}}>
                <img style={{width:'auto', height:"100%"}} src="/images/banner3.jpg" />
                <p className="legend">Qualified doctors</p>
            </div>
            
        </Carousel>
);

export default SimpleSlider;