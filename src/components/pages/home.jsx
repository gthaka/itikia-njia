import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    dur = duration => {
        this.moto.style.setProperty('--animation-time', duration +'s');
    }

    changeTime = ()=>{
        const animationDuration = Math.random();
        this.dur(animationDuration);

    }

    intvl = ()=>{return setInterval(this.changeTime, 1000 )};
    
    componentDidMount(){
        document.getElementsByTagName('body')[0].className = 'd-flex h-100 text-center text-white bg-dark';
        document.getElementsByTagName('main')[0].className = 'px-3';
        document.getElementById('root').className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column";
        this.moto = document.getElementById('moto')
        this.intvl();
    }
    render() { 
        
        // this.changeTime();
        return (
            <React.Fragment>
                <h1 className='inanimate-obj'>🚀</h1>
                <h1 id="moto" className='flicker-obj'>🔥</h1>
                <h1>You have just landed</h1>
                <p className="lead">We are well know for making quality products. It is only right to make sure we maintain the same standards.</p>
                <p className="lead">
                    <NavLink className="btn btn-outline-secondary" to="/products">View Products</NavLink>
                </p>
            </React.Fragment>
        );
    }
}
 
export default Home;