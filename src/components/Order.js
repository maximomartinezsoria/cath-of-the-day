import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component{
    
    renderOrder = key => {
        if(this.props.fish[key]){
            const fish = this.props.fish[key];
            const count = this.props.order[key];
    
            return (
                <li key={key} className="">
                    <span>
                        <span className="count">
                            <span className=""> {count} </span>
                        </span>
                        {fish.name}
                        <button>×</button>
                    </span>
                    <span className="price">{formatPrice(fish.price * count)}</span>
                </li>
            )
        }
    }
    
    render(){

        const order = Object.keys(this.props.order);
        const total = order.reduce((prevTotal, key) => {
            const fish = this.props.fish[key];
            const count = this.props.order[key];

            if(fish && fish.status){
                return prevTotal + (count * fish.price);
            }

            return prevTotal;
        }, 0);


        return (
            <div className="order-wrap">
                <h2>Your Order</h2>  
                <ul className="order">{order.map(this.renderOrder)}</ul>
                <div className="total">
                    Total: <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        );
    }
}

export default Order;