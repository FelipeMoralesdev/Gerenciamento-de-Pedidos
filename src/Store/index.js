import { createStore } from 'redux';

// Define os tipos de ação
const SET_NOME_SELECIONADO = 'SET_NOME_SELECIONADO';
const SET_DESCONTO = 'SET_DESCONTO';

// Define as ações
export const setNomeSelecionado = (nome) => ({
  type: SET_NOME_SELECIONADO,
  payload: nome,
});

export const setDesconto = (valor) => ({
  type: SET_DESCONTO,
  payload: valor,
});

// Define o estado inicial
const initialState = {
  nomeSelecionado: '',
  desconto: '',
};

// Define o reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NOME_SELECIONADO:
      return { ...state, nomeSelecionado: action.payload };
    case SET_DESCONTO:
      return { ...state, desconto: action.payload };
    default:
      return state;
  }
};

// Cria a store
const store = createStore(reducer);

export default store;