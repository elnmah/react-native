
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';
import api from './services/api';

export default class App extends Component {
    state = {
        errorMessage: null,
    };

    signIn = async () => {
        try{
            //requisição post com parametros
            const response = await api.post('/user' , {
                nome: "testando requisição post",
            });
            const { status } = response.data;

            await AsyncStorage.multiSet([
                ['@crud:nome', nome]
            ])
        }catch (response){
            this.setState({errorMessage: response.data.error});
        }
    };

    render() {
        return (
            <View style={styles.container}>
                {this.state.errorMessage && <Text>{this.state.errorMessage}</Text>}
                <Button onPress={this.signIn} title="Entrar"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
