import React, { createContext, useReducer, Dispatch } from 'react';



export interface Transaction {
  amount: number
  description?: string
  type: 'DEPOSIT' | 'WITHDRAW'
  createdAt: Date
}

export interface AppState {
  transactions: Transaction[],
  accountBalance: number,
}

export interface ActionType<T = {}> {
  type: string,
  payload: T,
}


const initialState: AppState = {
  transactions: [],
  accountBalance: 0,
};

type ReducerAction = ActionType<Transaction>
type ReducerFunction = (state: AppState, actions: ReducerAction) => AppState

const reducer: ReducerFunction = (state, actions) => {
  switch (actions.type) {
    case 'DEPOSIT':
      return {
        transactions: [...state.transactions, actions.payload],
        accountBalance: state.accountBalance + actions.payload.amount
      }
    case 'WITHDRAW':
      return {
        transactions: [...state.transactions, actions.payload],
        accountBalance: state.accountBalance - actions.payload.amount
      }
    default: return state;
  }
}

type ContextValue = {
  state: AppState,
  dispatch: Dispatch<ReducerAction>
}

export const Store = createContext<ContextValue>({ state: initialState, dispatch: () => undefined });

export function StoreProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}