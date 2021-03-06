const initialState = {
  products: [],
};

export function cartReducer(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case "ADD_TO_CART":
      let productInCart = false;
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.product.id) {
          productInCart = true;
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });
      if (!productInCart) {
        return Object.assign({}, state, {
          products: [
            ...state.products,
            {
              ...action.payload.product,
              quantity: 1,
            },
          ],
        });
      } else {
        return Object.assign({}, state, {
          products: updatedProducts,
        });
      }
    default:
      return state;
  }
}
