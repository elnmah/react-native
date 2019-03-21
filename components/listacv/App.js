import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import ListItem from "src/ListItem";

export default class Tela1 extends Component {

    constructor(props){
        super(props)
        this.state={
            list:[
                {key:1, img:'http://www.b7web.com.br/avatar1.png', nome:'Ellen', msg:'bom diaaaaaaaaaaaaaaaaa, bom dia, bom dia, bom dia, bom dia!!!, bom dia, '},
                {key:2, img:'https://www.b7web.com.br/avatar2.png', nome:'Ellen', msg:'boa tarde'},
                {key:3, img:'https://www.b7web.com.br/avatar3.png', nome:'Ellen', msg:'bom dia'}
            ]
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <ListItem data={item} />}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

});