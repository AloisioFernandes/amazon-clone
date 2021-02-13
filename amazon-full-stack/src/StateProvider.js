import React, { createContext, useContext, useReducer } from 'react'

// Prepara a camada de dados
export const StateContext = createContext()

// Envolve a aplicação e provê a camada de dados
export const StateProvider = ({ reducer, initialState, children }) => ( // reducer e initialState são recebidos de reducer.js como propriedades
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// Busca informação da camada de dados
export const useStateValue = () => useContext(StateContext)