import React, {Component,Fragment} from 'react';
import {connect} from 'react-redux';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
class Product extends Component{
    // state = {
    //     order:4,
    //     name:'Latihan'
    // }
    // handleCounterCahnge =(newValue)=>{
    //     this.setState({
    //         order:newValue,
    //     })
    // }

    render(){
        return(
            <Fragment>
            <p>Halaman Product</p>
            <hr/>
            <div className="header">
                <div className="logo">
                    <img src="https://etanee.id/img/content/img_logo_etanee_white.svg" alt="logo"/>
                </div>
                <div className="troley">
                    <img src="https://etanee.id/img/icon/ic_cart_white.svg" alt=""/>
                    <div className="count">{this.props.order}</div>
                </div>
            </div>
        <CardProduct 
            // onCountChange={(value)=>this.handleCounterCahnge(value)}
        />
        </Fragment>
        )
    }
}
const mapStateToProps=state=>{
    return{
        order:state.totalOrder
    }
}
export default connect(mapStateToProps) (Product);