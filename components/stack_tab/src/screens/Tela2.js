import React, {Component} from 'react';
import { Text, View,Button} from 'react-native';

export default class tela2 extends Component{

    static navigationOptions= {
        title:'Tela2'
    }

    render(){
        return(
			<View>
				<Text>Tela 2</Text>

				<Text> Nome:{this.props.navigation.getParam('nome')} </Text>

				<Button  title='Voltar' onPress={() => this.props.navigation.goBack()} />
			</View>
        )
    }
}