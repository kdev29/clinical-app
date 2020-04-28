import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3l_agileits_breadcrumbs">
                <div className="container">
                    <div className="w3l_agileits_breadcrumbs_inner">
                        <ul>
                            <li><Link to='/'>Home</Link><span>«</span></li>                                                
                            <li>{this.props.current}</li>
                            </ul>
                    </div>
                </div>
            </div>
        )
    }
}

Breadcrumb.propTypes = {
    current: PropTypes.string.isRequired
};

export default Breadcrumb;

