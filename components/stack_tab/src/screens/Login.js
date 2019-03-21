import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class login extends Component{

    render(){
        return(
            <View>
                <Text>LOGIN</Text>
                <Button title="Entrar" onPress={() => this.props.navigation.navigate('HomeTab')} />
            </View>
        )
    }
}