
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';

export default class App extends Component {
    constructor(props){
        super(props)
        this.state = {n:0}
    }
    render() {
        return (
            <View style={styles.body}>
                <Image source={require('./images/relogio.png')}/>
                <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
                <View style={styles.botaoArea}>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoText} >VAI</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Text style={styles.botaoText} >LIMPAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        paddingTop:20,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2c1f30'
    },
    timer:{
        color:'#baa07a',
        fontSize:80,
        fontWeight:'bold',
        backgroundColor:'transparent',
        marginTop:-150

    },
    botaoArea:{
        flexDirection:'row',
        height:40,
        marginTop:80

    },
    botao:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#886532',
        height:40,
        borderRadius:5,
        margin:10
    },
    botaoText:{
        fontSize:17,
        fontWeight:'bold',
        color:'#FFFFFF'
    }



});
