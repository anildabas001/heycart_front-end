
let initialState = {
    products: [],
    totalQuantity: 0,
    totalPrice: ''
}

if(localStorage.getItem('cart')) {
    let localAuthState = JSON.parse(localStorage.getItem('cart'));    
    initialState = localAuthState;        
}

const cartReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_CART':
            let updatedCart= {
                products: [],
                totalQuantity: 0,
                totalPrice: 0
            };
            if (action.cartState) {
                updatedCart={
                    ...state,
                    totalQuantity: action.cartState.totalQuantity,
                    totalPrice: action.cartState.totalPrice,
                    products: action.cartState.products.map((product) => {return {...product}})
                } 
            }
            
            return updatedCart;

        // case 'SYNC_CART_LOCAL_DB':
        //     let updatedCart = initialState;
        //     if (action.cartState) {
        //         updateState={
        //             ...state,
        //             totalQuantity: action.cartState.totalQuantity,
        //             totalPrice: action.cartState.totalPrice,
        //             products: action.cartState.products.map((product) => {return {...product}})
        //         }
        //     }  
                       
        //return updateState;   
                        
        default: 
            return state;
        
    }
}

export default cartReducer;