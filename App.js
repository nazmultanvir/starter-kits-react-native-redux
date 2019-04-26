import React from "react"
import { YellowBox } from 'react-native'
import { Provider, connect } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import EStyleSheet from "react-native-extended-stylesheet"
import { persistor, store } from "src/redux/Store/Store"
import GlobalStyles from "src/views/common/GlobalStyles"
import LoadingView from "src/views/components/LoadingView"
import { fadeIn } from 'react-navigation-transitions'
import { setCustomText } from 'react-native-global-props'

// App screens
import Main from "src/views/pages/Main"

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation'

const MainNavigator = createStackNavigator({
  Main: Main,
}, {
    transitionConfig: () => fadeIn(),
    initialRouteName: "Main",
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  })
const Navigator = createAppContainer(MainNavigator);

const customTextProps = {
  style: {
    fontFamily: "SFProText-Regular"
  }
}

// Ignore the warnings from the 3rd party libraries
YellowBox.ignoreWarnings(['Remote debugger'])
YellowBox.ignoreWarnings(['Setting a timer'])

setCustomText(customTextProps)

// Build the stylesheets
EStyleSheet.build(GlobalStyles)

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingView />} persistor={persistor}>
      <Navigator />
    </PersistGate>
  </Provider>
)

export default App
