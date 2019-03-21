import React, {Component} from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Tela1 from './Tela1'
import Tela2 from './Tela2'

const HomeTabNavigator = createBottomTabNavigator({
    Tela1:{
        screen:Tela1
    },
    Tela2:{
        screen:Tela2
    }
})

export default HomeTabNavigator