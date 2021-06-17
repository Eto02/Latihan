import React, {Component,Fragment} from 'react';
import CardProduct from '../CardProduct/CardProduct';
import './Product.css';
class Product extends Component{
    state = {
        order:4,
        name:'Latihan'
    }
    handleCounterCahnge =(newValue)=>{
        this.setState({
            order:newValue,
        })
    }

    render(){
        return(
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="" alt=""/>
                </div>
                <div className="troley">
                    <img src="https://info.etanee.id/wp-content/uploads/2021/01/cropped-cropped-cropped-etanee-biru-1.png" alt=""/>
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
        <CardProduct 
            onCountChange={(value)=>this.handleCounterCahnge(value)}
        />
        </Fragment>
        )
    }
}
export default Product;