import React, {Component} from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Login from './src/screens/Login'
import HomeTab from './src/screens/HomeTab'

const AppNavigator = createStackNavigator({
  Login:{
      screen:Login
  },
  HomeTab:{
      screen:HomeTab
  }
},{
    defaultNavigationOptions:{
        header:null
    }
})

export default createAppContainer(AppNavigator)