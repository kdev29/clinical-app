import React from 'react';
import App from '../../App';
import Register from '../active-user/Register';
import Login from '../active-user/Login';
import { Link } from 'react-router-dom';
import Modal from './Modal';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.el = React.createRef();
       
        this.state = {
            showMenu: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu() {
        this.setState({showMenu: true})
    }

    closeMenu() {
        this.setState({showMenu: false})
    }
    

    render() {
        return (
            <>
            
                <Modal onClose={this.closeMenu} show={this.state.showMenu}></Modal>

                <section ref={this.el} className="header-w3ls"> 
                    <button id="trigger-overlay" onClick={this.showMenu} type="button"><i className="fa fa-bars" aria-hidden="true"></i></button>
                    <div className="bottons-agileits-w3layouts">
                    <a className="page-scroll" href="#myModal2" data-toggle="modal"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</a>.
                    <a className="page-scroll" href="#myModal3" data-toggle="modal"><i className="fa fa-pencil-square-o" aria-hidden="true"></i>Register</a>
                    </div>
                    <h1><Link to='/'>Clinical care</Link></h1>
                    <div className="clearfix"> </div>
                </section>
                <Register></Register>
                <Login></Login>
            </>
            
        );
    }
}

export default Header;