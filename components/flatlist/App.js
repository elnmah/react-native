
import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

/*
* FlaList -> Linguagem ordenada
* carrega na memoria somente os itens que aparecerem na tela, enquanto nao aparecer nao sera carregador,
* diferente do scrollview que carrega tudo e vai mostrando
* data -> todas as informações (cria umm json e manda p data, todos os itens que podem ser exibidos) -> guarda os itens
* renderItem -> vai ser internamente executa quantas vezes forem necessárias para que o item apareça -> carrega os itens
*
*
* */
export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            flatData:[
                {key:'1', nome:'Ellen', idade:23},
                {key:'2', nome:'Mayara', idade:23},
                {key:'3', nome:'Ellen', idade:23},

            ]
        }
    }
    flatRender(item){
        return(
            <View style={styles.flatItem}>
                <Text style={styles.flatNome}> {item.nome}</Text>
                <Text style={styles.flatIdade}> {item.idade} anos</Text>

            </View>


        )
    }
    render() {
        return (
            <View style={styles.body}>
                <FlatList data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    flatItem:{
        padding: 10,
    },
    flatNome:{
        fontSize:24,
    },
    flatIdade:{
        fontSize:14,
    }

});
