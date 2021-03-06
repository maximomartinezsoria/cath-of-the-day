import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component{

    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

        var localOrder = JSON.parse(localStorage.getItem(this.props.match.params.storeId));
        this.setState({ order: localOrder });
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const fishes = { ...this.state.fish };
        fishes[`fish${Date.now()}`] = fish;
        this.setState( { fishes } );
    }

    addSampleFish = () => {
        this.setState({fishes: sampleFishes});
    }

    addOrder = key =>{
        const order = { ...this.state.order };
        order[key] = order[key] + 1 || 1;
        this.setState( { order } );
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market"/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} addOrder={this.addOrder} order={key} />)}
                    </ul>
                </div>
                <Order fish={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} addSampleFish={this.addSampleFish}/>
            </div>
        );
    }
}

export default App; 