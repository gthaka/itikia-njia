import React, { Component } from 'react';
import {} from 'react-router-dom';
import ProductCard from './productCard';

class Products extends Component {
    state = { 
        products : [
            {id:1, name:'Kush', description:'A good way to get higher ☁!!'},
            {id:2, name:'Hush', description:'A good way to calm down!! 🔻'},
            {id:3, name:'Sheesh', description:'A good way to sneeze!🤧'},
        ]
     } ;
    
    componentDidMount(){
        document.getElementsByTagName('body')[0].className = 'd-flex h-100 text-center text-white bg-secondary';
        document.getElementsByTagName('main')[0].className = 'px-3';
        document.getElementById('root').className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column";
    }
    getProdId = id => {
        console.log(id);
        document.getElementById('pNum').innerHTML = id;
    }
    render() { 
        
        return (
            <React.Fragment>
                <h1 className=''>Products</h1>
                <p className="lead">We are well known for making quality products. 
                It is only right to make sure we maintain the same standards.</p>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    {
                        this.state.products.map(product =>
                            <ProductCard
                                key={product.id}
                                name={product.name}
                                description={product.description}
                                id={product.id}
                                handleClick={this.getProdId}
                            />)
                    }
                </div>
                <code id="pNum"></code>
            </React.Fragment>
        );
    }
}
 
export default Products;