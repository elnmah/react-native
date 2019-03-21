import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';

export default class Tela1 extends Component{

    static navigationOptions = {
        title:'Tela 1'
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Esta é a tela 1 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    icon:{
        width:26,
        height:26
    }
})