import EStyleSheet from "react-native-extended-stylesheet"
import { Dimensions, Platform } from "react-native"
import { ifIphoneX, getBottomSpace } from 'react-native-iphone-x-helper'

export default EStyleSheet.flatten(EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
      },
      instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
      },
}))