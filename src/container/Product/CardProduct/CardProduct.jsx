import React, {Component} from 'react';
import Counter from './Counter';

class CardProduct extends Component{
  
    render(){
        return(
          
          
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://wallpaperaccess.com/full/815727.jpg" alt=""/>
                </div>
                <p className='product-title'>Daigng Aayam Berbumbu Rasa Rsa</p>
                <p className='product-price'>Rp.410,000</p>
            <Counter />
            </div>
       
        )
    }
}
export default CardProduct;