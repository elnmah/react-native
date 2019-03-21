import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Lista from './src/Lista';
import Receita from './src/Receita';

const AppNavigator = createStackNavigator({
	Lista:{
		screen:Lista
	},
	Receita:{
		screen:Receita
	}
});

export default createAppContainer(AppNavigator)