export const initialState = {
  basket: [],
};

//JS Selector 
export const getBasketTotal = (basket) => {
  //basket.reduce((amount, item)=> item.price + amount , 0) : For some reason, this reduce function is not working :(
  let amount = 0;
  for (let i = 0; i < basket.length; i++) {
    const item = basket[i];
    amount = amount + item.price
  }
  return amount;
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
