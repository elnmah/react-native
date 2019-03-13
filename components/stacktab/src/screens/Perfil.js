import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

export default class Perfil extends Component{

    static navigationOptions= {
        title:'Perfil',
        headerRight: <View style={{ width:30, height:30, backgroundColor:'#00FF00' }}></View>,
        headerStyle:{
            backgroundColor:'#0ff',
            height:80
        },
        headerTintColor:'#FFF',
        headerTitleStyle:{
            fontSize:30
        }

    }

    render(){
        return(
            <View>
                <Text>Perfil</Text>
            </View>
        )
    }
}