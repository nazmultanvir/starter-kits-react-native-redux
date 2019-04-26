import React, { Component } from "react"
import {
    View,
    StatusBar,
    ImageBackground,
    Image, TouchableOpacity
} from "react-native"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import styles from "./styles"
import { duckOperations } from "src/redux/Main/duck"
import { StackActions, NavigationActions } from 'react-navigation'


class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data : []
        }
    }

    componentDidMount() {
        
    }

    

    componentDidUpdate() {
        
    }


    componentWillUnmount() {

    }


    render() {
       return (
            <View style={styles.container}>
                <ImageBackground source={require('../../../../assets/bg.png')} style={{width: '100%', height: '100%'}}>
                    <StatusBar backgroundColor={'transparent'} barStyle="dark-content" translucent />
                    <View style={{justifyContent : "center", alignItems: 'center', paddingTop : 100}}>
                        <Image
                                style={styles.button}
                                source={require('../../../../assets/weather.png')}
                         />
                    </View> 
                </ImageBackground>
            </View>
          );
    }

}

function mapStateToProps(state, props) {
    return {
        currentCountry: state.mainReducers.main.currentCountry,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(duckOperations, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
