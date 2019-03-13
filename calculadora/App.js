import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

class Botao extends Component{
    constructor(props){
        super(props)
        this.state = {}

        let c = 1
        if(props.c){
            c = parseInt(props.c)
        }
        let bg = '#E0E0E0'
        if(props.bg){
            bg = props.bg
        }
        this.styles = StyleSheet.create({
            area:{
                flex:c,
                justifyContent: 'center',
                alignItems:'center',
                borderWidth:1,
                borderColor:'#999999',
                backgroundColor:bg
            },
            text:{
                fontSize: 18
            }
        })
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
                <Text style={this.styles.text}>{this.props.n}</Text>
            </TouchableOpacity>
        );
    }
}
export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {result:'0'}
        this.btn = this.btn.bind(this)
    }
    btn(b){
        let s = this.state
        if(b == "C") {
            s.result = 0
        } else if(b == "=") {
            s.result = eval(s.result)
        }else {
            if (s.result == "0") {
                s.result = b
            } else{
                s.result += b
            }
        }
        this.setState(s)

    }

    render() {
        return (
            //colunas
            <View style={styles.body}>
                <View style={styles.linha}>
                    <Text style={styles.res}>{this.state.result}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao c="3" n="C" bg="#CCCCCC" onPress={()=>{this.btn("C")}}/>
                    <Botao n="/" bg="#FD9536" onPress={()=>{this.btn("/")}}/>
                </View>
                <View style={styles.linha}>
                    <Botao  n="7" onPress={()=>{this.btn("7")}}/>
                    <Botao  n="8" onPress={()=>{this.btn("8")}}/>
                    <Botao  n="9" onPress={()=>{this.btn("9")}}/>
                    <Botao  n="*" bg="#FD9536" onPress={()=>{this.btn("*")}}/>
                </View>
                <View style={styles.linha}>
                    <Botao  n="4" onPress={()=>{this.btn("4")}}/>
                    <Botao  n="5" onPress={()=>{this.btn("5")}}/>
                    <Botao  n="6" onPress={()=>{this.btn("6")}}/>
                    <Botao  n="-" bg="#FD9536" onPress={()=>{this.btn("-")}}/>
                </View>
                <View style={styles.linha}>
                    <Botao  n="1" onPress={()=>{this.btn("1")}}/>
                    <Botao  n="2" onPress={()=>{this.btn("2")}}/>
                    <Botao  n="3" onPress={()=>{this.btn("3")}}/>
                    <Botao  n="+" bg="#FD9536" onPress={()=>{this.btn("+")}}/>
                </View>
                <View style={styles.linha}>
                    <Botao c="2" n="0" onPress={()=>{this.btn("0")}}/>
                    <Botao  n="." onPress={()=>{this.btn(".")}}/>
                    <Botao  n="=" bg="#FD9536" onPress={()=>{this.btn("=")}}/>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    linha:{
        flex:1,
        flexDirection:'row'
    },
    res:{
        backgroundColor:'#000000',
        color:'#FFFFFF',
        fontSize:50,
        flex:1,
        textAlign:'right'
    }
});
