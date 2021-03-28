import React from 'react';
import {connect} from 'react-redux'
import CartProductSection from '../../Components/CartProductSection/CartProductSection';
import CartSummary from '../../Components/CartSummary/CartSummary'
import ContainerDiv from '../../Components/UI/ContainerDiv/ContainerDiv';
import {updateCart, updateCartDb} from '../../Store/Actions/CartAction';

const Cart = (props) => {
    let totalPrice = 0;
    let totalQuantity = 0;
    let symbol = '$';
    
    if(props.cart.products.length > 0) {
        totalPrice = props.cart.totalPrice.toFixed(2);
        symbol = props.cart.products[0].product.price.symbol;
        totalQuantity = props.cart.totalQuantity.toFixed(2);
    }

    return (
    <ContainerDiv>        
        <h1 style={{fontWeight: 400, fontSize: '2.6rem', borderBottom: '1px solid #eee', padding: '5px', marginBottom: '20px'}}>My Cart</h1>
        <CartProductSection products={props.cart.products}/>
        <CartSummary symbol={symbol} totalPrice={totalPrice} totalQuantity={totalQuantity}/>
    </ContainerDiv>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cartData        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCart: () => dispatch(updateCart()),
        updateCartDb: () => dispatch(updateCartDb())        
    }
}

export default connect(mapStateToProps, null)(Cart);