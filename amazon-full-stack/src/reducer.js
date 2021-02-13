export const initialState = {
  basket: [],
}

export const getBasketTotal = (basket) => 
  basket?.reduce((total, item) => total + item.price, 0)

const reducer = (state, action) => {
  // console.log(action)
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state, // retorna o que estiver no state
        basket: [...state.basket, action.item] // modifica apenas basket do state
      }
    
    default:
      return state
  }
}

export default reducer