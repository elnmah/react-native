
import React, {Component} from 'react';
import {StyleSheet, View, Switch, Text, Slider} from 'react-native';


/*
* Switch - true ou false
* precisa de state pq sempre muda de valor ...
*  -----------------------------------------------------
*  Slider
 *  recebe os parâmetros value={valor inicial do slider}, minimumValue{valor mínimo} maximumValue={valor máximo} e
 *  onValueChange={função que executa o que se quer
*
* */
export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            valorSw:false,
            valorSl:50,
            red:0,
            green:0,
            blue:0,
        }
    }
    render(){
        return (
            <View style={styles.body}>
                <Text> {(this.state.valorSw) ? "Selecionado" : "not selected"} </Text>
                <Switch style={styles.padding} thumbColor={'#0000FF'} trackColor={'#FF0000'} value={this.state.valorSw} onValueChange={(v) => this.setState({valorSw:v})} />

                <Text>Incidência de VERMELHO</Text>
                <Slider value={this.state.valorSl} minimumValue={0} maximumValue={255} onValueChange={(v)=>this.setState({red:v})} />

                <Text>Incidência de VERDE</Text>
                <Slider value={this.state.valorSl} minimumValue={0} maximumValue={255} onValueChange={(v)=>this.setState({green:v})} />

                <Text>Incidência de AZUL</Text>
                <Slider value={this.state.valorSl} minimumValue={0} maximumValue={255} onValueChange={(v)=>this.setState({blue:v})} />

                <View style={styles.resultado}>
                    <View style={{backgroundColor:'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')',width:100,height:100}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    body:{
        flex:1,
    },
    padding:{
        paddingBottom:20,
        paddingTop:30,
    },
    resultado:{
        flexDirection:'row',
        justifyContent:'center',
        padding:20
    },
    retangulo:{
        width:200,
        height:100
    }
});
