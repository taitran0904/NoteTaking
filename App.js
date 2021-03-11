import React from 'react'
import {Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './src/navigation/Index'
import {Provider as StoreProvider} from 'react-redux'
import store from './src/reducer/store'
//Tran Le Tan Tai 1824801030018
export default function App(){
  return (
    <StoreProvider store = {store}>
    <PaperProvider>
      <AppNavigator/>
    </PaperProvider>
    </StoreProvider>
  )
}
//Tran Le Tan Tai 1824801030018