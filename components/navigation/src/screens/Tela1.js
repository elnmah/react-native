import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class tela1 extends Component{

    render(){
        return(
            <View>
                <Text>Tela 1</Text>
                <Button  title='Ir para tela 2 e mostrar nome ' onPress={() => this.props.navigation.navigate('Tela2', { nome:"Ellen", idade:23} )} />
            </View>
        )
    }
}