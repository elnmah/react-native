import React, {Component} from 'react';
import { Text, View,Button} from 'react-native';

export default class tela2 extends Component{

    static navigationOptions= {
        title:'Tela2',
        tabBarOptions:{
            tabStyle:{
                backgroundColor:'#00FF00'
            }

        }
    }
    render(){
        return(
            <View>
                <Text>Tela 2</Text>
            </View>
        )
    }
}