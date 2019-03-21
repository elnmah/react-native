import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, ActivityIndicator, TextInput, Button, StatusBar} from 'react-native';
import Item from './src/Item'

export default class App extends Component {

    constructor(props){
        super(props);
        this.state ={
            statusStyle:'dark-content',
            isLoading: false,
            lista: [],
            input:''
        }
        this.url = 'https://b7web.com.br/todo/87007'

        this.addButton = this.addButton.bind(this);
        this.loadList = this.loadList.bind(this);

        this.loadList()
    }

    loadList(){
        fetch(this.url)
            .then((response) => response.json())
            .then((resultJson)=>{
                let state = this.state
                state.lista = resultJson.todo
                this.setState(state)
            })
    }
    addButton(){
        let text = this.state.input
        let state = this.state
        state.input = ''
        this.setState(state)

        fetch(this.url, {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                item:text
            })
        })
            .then((r) => r.json())
            .then((json) =>{
                alert("Item inserido com sucesso!")
                this.loadList()
            })

    }

    render(){

        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20}}>
                    <ActivityIndicator size="large" color="#0000ff"/>
                </View>
            )
        }

        return(
            <View style={styles.container}>
                <View style={styles.addArea}>
                    <StatusBar barStyle={this.state.statusStyle} />
                    <Text style={styles.addText}>Adicione uma nova tarefa</Text>
                    <TextInput style={styles.input} onChangeText={(text) => {
                        let state = this.state
                        state.input = text
                        this.setState(state)
                    }} value={this.state.input} />
                    <Button title="Adicionar" onPress={this.addButton} />
                </View>
                <FlatList
                    data={this.state.lista}
                    renderItem={({item}) => <Item data={item} url={this.url} loadFunction={this.loadList} />}
                    keyExtractor={(item, index) => item.id.toString()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,

    },
    addArea:{
        marginBottom:20,
        backgroundColor:'#DDD',
    },
    addText:{
        fontSize:14,
        textAlign:'center',
        marginBottom:10,
        marginTop:10
    },
    input:{
        height:40,
        backgroundColor:'#ccc',
        marginLeft:20,
        marginRight:20,
        paddingLeft:10,
        paddingRight:10,

    },

})
