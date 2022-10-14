export const initialState = {
  Cart: [],
};

const reducer = (state, action) => {
  switch(action.type){
    case "ADD_TO_CART":
    return {
      ...state,
      cart: [...state.Cart,...action.item],
    }
  }
};
export default reducer;
