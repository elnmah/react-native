import React, {Component} from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import Home from "./src/Home";
import Contato from "./src/Contato";
import Horarios from "./src/Horarios";
import Sobre from "./src/Sobre";

const AppNavigator = createBottomTabNavigator({
    Home:{
        screen:Home,
    },
    Contato:{
        screen:Contato
    },
    Horarios:{
      screen:Horarios
    },
    Sobre:{
      screen:Sobre
    }
})

export default createAppContainer(AppNavigator)