import React , { Component } from 'react'
import {createStackNavigator, createAppContainer } from 'react-navigation';
import Tela1 from './Tela1'
import Tela2 from './Tela2'

const Navegador = createStackNavigator({
    Tela1:{
        screen:Tela1
    },
    Tela2:{
        screen:Tela2
    }
})

export default createAppContainer(Navegador)