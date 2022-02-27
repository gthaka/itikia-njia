import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <footer className="mt-auto text-white-50">
                <p>Learning React by <Link to="#!" className="text-white">🔥</Link>.</p>
            </footer>
        );
    }
}
 
export default Footer;