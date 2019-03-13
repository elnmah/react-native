
import React, {Component} from 'react';
import {StyleSheet, View,TextInput, AsyncStorage} from 'react-native';


/**
 * AsyncStorage - armazenar dados
 *
 * onChangeText - recupera os dados digitados
 * */
export default class App extends Component {

    //primeira coisa que roda no app
    constructor(props) {
        super(props);
        this.state = {
            nome:''
        };

        //pegar oq ta salvo na memoria
        AsyncStorage.getItem("nome").then((value) => {
            this.setState({nome:value})
        })

        this.setNome = this.setNome.bind(this)
    }

    setNome(nome){

        let s = this.state
        s.nome = nome
        this.setState(s)

        //salvando as informações
        AsyncStorage.setItem("nome", nome)
    }

    render() {
        return (
            <View style={styles.body}>
                <TextInput style={styles.input} value={this.state.nome}  onChangeText={(text) => this.setNome(text)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    input:{
        width:200,
        height:100,
        borderWidth:1,
        borderColor:'#ccc',
        padding:20,
        fontSize:14,
        color:'#000'
    }
});
