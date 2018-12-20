import React from 'react';
import AddNewFish from './AddNewFish';

class Inventory extends React.Component{
    render(){
        return (
            <div className="inventory">
                <h2>Inventory</h2>
                <AddNewFish addFish={this.props.addFish} />
                <button onClick={this.props.addSampleFish}>Load sample fishes</button>
            </div>
        );
    }
}

export default Inventory;