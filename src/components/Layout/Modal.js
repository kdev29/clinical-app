import React, { useState } from 'react'
import './Modal.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
    position: 'fixed',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    zIndex: '999'
}

const menu = [
    {title: 'Home', route: '/'},
    {title: 'About', route: '/about'},
    {title: 'Doctors', route: '/doctors'},
    {title: 'Appointments', route: '/appointments'},
    {title: 'Departments', route: '/departments'},
    {title: 'Contact', route: '/contact'},
];

const Modal = ({show, onClose, ...props}) => {

    const [isShow, setIsShow] = useState(show);
  
    const closeModal = () => {
        setIsShow(false);
    }

    return (
        <>
            {
                show && (
                <div className="reactmodal" style={styles}>                  
                        <div onClick={onClose} style={{width: '95%', padding: '5px', color:'white', height: '5%', textAlign: 'right', fontSize: '1.8em'}}>
                            <div style={{cursor: 'pointer'}}>
                                <i className="fa fa-times" aria-hidden="true"></i>
                                <a style={{color: 'white', margin: '5px'}} onClick={onClose}>Close</a>
                            </div>
                            
                        </div>
                        <div style={{width: '100%', height: '95%', textAlign: 'center'}}>

                        <ul>
                            
                            {
                                menu.map(m => <li onClick={onClose} className='test'><Link key={m.title} to={m.route}>{m.title}</Link></li>)
                            }
                        </ul>

                        </div>
                    </div>)
            }
        </>
        
    );
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}

export default Modal;