import React from 'react';

class AddNewFish extends React.Component{
    refName = React.createRef();
    refPrice = React.createRef();
    refStatus = React.createRef();
    refDesc = React.createRef();
    refImage = React.createRef();
    
    handleSubmit = (event) => {
        event.preventDefault();
        const fish = {
            name: this.refName.value.value,
            price: parseFloat(this.refPrice.value.value),
            status: this.refStatus.value.value,
            desc: this.refDesc.value.value,
            image: this.refImage.value.value
        }
        this.props.addFish(fish);
        event.currentTarget.reset();
    } 

    render(){
        return (
            <form className="fish-edit" onSubmit={this.handleSubmit}>
                <input ref={this.refName} name="name" type="text" placeholder="name"/>
                <input ref={this.refPrice} name="price" type="number" placeholder="price"/>
                <select ref={this.refStatus} name="status" type="text" placeholder="status">
                    <option value={true}>Fresh!</option>
                    <option value={false}>Sold Out!</option>
                </select>
                <textarea ref={this.refDesc} name="desc" placeholder="desc"></textarea>
                <input ref={this.refImage} name="image" type="text" placeholder="image"/>
                <button type="submit">+ Add Item</button>
            </form>   
        );
    }
}

export default AddNewFish;