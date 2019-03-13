
import React, {Component} from 'react';
import {StyleSheet, View, Picker, Text} from 'react-native';


/*
* Picker
*selectedValue -> vai armazenar o valor do item que ta selecionado(pode ser uma referencia interna)
* onValueChange -> quando trocar de item, vai enviar a funcao
*  <Picker.item /> -> exibir as opcoes do picker - key -> chave, value-> valor interno, label-> oq aparece na tela
*
*
* */
export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            servico:0,
            servicos:[
                {nome:'Alinhamento', valor:30},
                {nome:'Balancemaneto', valor:20}
            ]
        }
    }
    render() {

        let servicosItems = this.state.servicos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return (
            <View style={styles.body}>
                <Text style={styles.logo}>Autopeças do Zé</Text>
                <Picker selectedValue={this.state.servico} onValueChange={(itemValue,itemIndex) => this.setState({servico:itemValue})}>
                    {servicosItems}
                </Picker>
                <Text style={styles.texto}> R$ {this.state.servicos[this.state.servico].valor} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    body:{
        flex:1,
        backgroundColor:'#DDDDDD'
    },
    logo:{
        fontSize:30,
        textAlign:'center',
        marginBottom:20
    },
    texto:{
        fontSize:26,
        textAlign:'center',
        marginTop:20,
    }
});
