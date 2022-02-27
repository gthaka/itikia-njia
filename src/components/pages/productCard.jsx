import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

class ProductCard extends Component {
    
    render() { 
        // console.log(this);
        const {id,name,description} = this.props;
        console.log(this)
        return (
            <div className="col">
                <div className="card">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect>
                        <text x="50%" y="50%" fill="#dee2e6" dy=".3em">Product {name}</text>
                    </svg>
                    <div className="card-body text-dark">
                        <h5 className="card-title">Product {name} #{id}</h5>
                        <p className="card-text">
                            {description}<br/>
                            <button className="btn btn-outline-secondary" onClick={this.state}>More Info</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ProductCard;