
import React, {Component} from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';

/*
* SectionList -> FlatList divido em sessões, exemplo lista de contatos (contatos com a letra b, com a letra c .... )
* sections -> dados
*
* */
export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            listData :[
                {title:'B',data:[
                    {key:'1', nome:'Bruna', idade:12}
                    ]},
                {title:'C',data:[
                    {key:'2', nome:'Carol', idade:13},
                    {key:'3', nome:'Carolasad', idade:14},
                ]},
                {title:'D',data:[
                    {key:'4', nome:'Dantas', idade:13},
                    {key:'5', nome:'Danila', idade:14},
                    {key:'6', nome:'Daniela', idade:14},
                ]},
                {title:'E',data:[
                    {key:'7', nome:'Dantas', idade:13},
                    {key:'8', nome:'Danila', idade:14},
                    {key:'9', nome:'Daniela', idade:14},
                    {key:'10', nome:'Daniela', idade:14},
                    {key:'11', nome:'Daniela', idade:14},
                    {key:'12', nome:'Daniela', idade:14},
                ]},
            ]
        }
    }
    listSectionRender(section){
        return(
            <Text style={styles.section}> Letra: {section.title} </Text>
        )
    }
    listRender(item){
        return(
            <Text style={styles.item}>{item.nome} - {item.idade} anos </Text>
        )

    }
    render() {
        return (
            <View style={styles.body}>
                <SectionList sections={this.state.listData} renderItem={({item}) => this.listRender(item)}  renderSectionHeader={({section}) =>this.listSectionRender(section)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1,
    },
    item:{
        fontSize:18,
        height:40,
        padding:10,
    },
    section:{
        fontSize:14,
        backgroundColor:'#CCC',
        padding:10,
    }

});
