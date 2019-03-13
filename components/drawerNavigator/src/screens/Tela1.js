import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class tela1 extends Component{

    render(){
        return(
            <View>
                <Text>Tela 1</Text>
                <Button title="Abrir menu" onPress={() => this.props.navigation.toggleDrawer()} />

                <Button title="Ellen" onPress={() => this.props.navigation.navigate('Tela2', { nome:"Ellen"} )} />
                <Button title="Mayara" onPress={() => this.props.navigation.navigate('Tela2', { nome:"Mayara"} )} />
            </View>
        )
    }
}