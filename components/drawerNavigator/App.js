import React, {Component} from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import Tela1 from './src/screens/Tela1'
import Tela2 from './src/screens/Tela2'

const AppNavigator = createDrawerNavigator({
    Tela1:{
        screen:Tela1,
    },
    Tela2:{
        screen:Tela2
    }
})

export default createAppContainer(AppNavigator)