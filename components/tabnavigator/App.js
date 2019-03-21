import React , { Component } from 'react'
import {createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './src/screens/Home'
import Tela2 from './src/screens/Tela2'

const Navegador = createBottomTabNavigator({
    Home:{
        screen:Home
    },
    Tela2:{
        screen:Tela2
    }
}, {
    defaultNavigationOption:{

    }

})

export default createAppContainer(Navegador)