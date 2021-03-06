import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{    
    render(){
        const { name, image, price, desc, status} = this.props.details;
        return (
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button disabled={!status} onClick={ () => {this.props.addOrder(this.props.order)} } > { status  ? 'Add to order' : 'Sold Out!'}</button>
            </li>
        );
    }
}

export default Fish;