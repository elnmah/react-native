import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Feed from './src/screens/Feed'
import Perfil from './src/screens/Perfil'

const AppNavigator = createStackNavigator({
  Feed:{
      screen:Feed
  },
    Perfil:{
      screen:Perfil
  }
}, {
    initialRouteName:'Feed',
    headerMode:'screen',
    headerBackTitleVisible:true,
    headerLayoutPreset:'center',
})

export default createAppContainer(AppNavigator)