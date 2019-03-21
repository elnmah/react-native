import React, {Component} from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

export default class Tela2 extends Component{

    static navigationOptions = {
        title:'Tela2',
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Esta é a tela 2 </Text>
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