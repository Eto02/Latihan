import React, {Component} from 'react';

class CardProduct extends Component{
    state = {
        order:4,

    }

    handleCounterChange = (newValue) =>{
        this.props.onCountChange(newValue)
    }

    handlePlus = ()=>{
      this.setState({
          order:this.state.order +1
      },()=>{
        this.handleCounterChange(this.state.order)
      })
    
    }

    hendleMinus=()=>{
        if (this.state.order>0) {
            this.setState({
                order:this.state.order -1
            },()=>{
                this.handleCounterChange(this.state.order)
            })
        }
       
    }
    render(){
        return(
          
          
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://wallpaperaccess.com/full/815727.jpg" alt=""/>
                </div>
                <p className='product-title'>Daigng Aayam Berbumbu Rasa Rsa</p>
                <p className='product-price'>Rp.410,000</p>
                <div className="container">
                    <button className='minus' onClick={this.hendleMinus}>-</button>
                    <input type="text" name="" id="" value={this.state.order}/>
                    <button className='plus' onClick={this.handlePlus}>+</button>
                </div>
            </div>
       
        )
    }
}
export default CardProduct;