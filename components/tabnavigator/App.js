import React, {Component} from 'react'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Tela1 from './src/screens/Tela1'
import Tela2 from './src/screens/Tela2'

const AppNavigator = createBottomTabNavigator({
    Tela1:{
        screen:Tela1,
        navigationOptions:{
            title:'Tela1'
        }
    },
    Tela2:{
        screen:Tela2
    }
}, {
    defaultNavigationOptions:{
        tabBarOptions:{
            showIcon:false,
            labelStyle:{
                fontSize:30,
            }
        }
    }

})

export default createAppContainer(AppNavigator)