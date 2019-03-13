import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Tela1 from './src/screens/Tela1'
import Tela2 from './src/screens/Tela2'

const AppNavigator = createStackNavigator({
    Tela1:{
        screen:Tela1,
        navigationOptions:{
            title:'Tela1'
        }
    },
    Tela2:{
        screen:Tela2
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#FF00FF',
            height:100
        },
        headerTintColor:'#FFF',
        headerTitleStyle:{
            fontWeight:'normal',
            fontSize:20
        }
    }
})

export default createAppContainer(AppNavigator)