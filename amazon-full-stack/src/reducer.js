export const initialState = {
  basket: [],
  user: null
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

    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: []
      }

    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      ) // retorna o índice do item que disparou a ação REMOVE_FROM_BASKET
      let newBasket = [...state.basket]

      if(index >= 0) { // verifica se o índice foi encontrado
        newBasket.splice(index, 1) // remove o item de índice correspondente
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket`
        )
      }

      return {
        ...state,
        basket: newBasket
      }

    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }
    
    default:
      return state
  }
}

export default reducer