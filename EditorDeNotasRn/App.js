import React from "react"
import { Provider} from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react"
import {store, persistor} from './src/Store'
import { NavigationContainer } from "@react-navigation/native"
import MainStack from "./src/stacks/MainStack"

// const AppContainer = createAppContainer(MainNavigator)

    export default ()  => {
      return (
             <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                  <NavigationContainer>
                      <MainStack />
                  </NavigationContainer>
               </PersistGate>
             </Provider>
      )
      }
    

