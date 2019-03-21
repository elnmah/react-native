import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, Image} from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            filmes:[]
        }

        // pega url, entao transforme ela em json, e depois me de o resultado
        fetch('https://filmespy.herokuapp.com/api/v1/filmes')
            .then((response)=>response.json())
            .then((resultJson)=>{
                let state = this.state
                state.filmes = resultJson.filmes
                this.setState(state)

            })
    }
    render() {
        if(this.state.loading){
            return (
                <View style={[styles.container, styles.loading]}>
                    <Text style={styles.loadingTxt}>Carregando ... </Text>
                </View>
            )
        }else{
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.filmes}
                        renderItem={({item}) => <Filme data={item} />}
                        keyExtractor={(item, index )=> item.titulo}
                    />
                </View>
            );
        }
    }
}
class Filme extends Component{
    render(){
        return(
            <View style={styles.filmeArea}>
                <Image source={{uri:this.props.data.poster.replace('http.','https.')}} style={styles.filmeImg} />
                <View style={styles.filmeInfo}>
                    <Text style={styles.filmeNome}>{this.props.data.titulo}</Text>
                    <Text>{this.props.data.data}</Text>
                    <Text>{this.props.data.sinopse}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    loading:{
        justifyContent:'center'
    },
    loadingTxt:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    filmeArea:{
        flex:1,
        flexDirection:'row',
        margin:10

    },
    filmeImg:{
        width:80,
        height:110,
    },
    filmeInfo:{
        flex:1,
        flexDirection:'column',
        marginLeft:10,
        justifyContent:'center'

    },
    filmeNome:{
        fontSize:18,
        fontWeight:'bold'
    }
});
