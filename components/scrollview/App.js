
import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.body}>
                <View style={styles.header}></View>
                <ScrollView pagingEnabled={true}>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                    <Text style={styles.quadrado1}></Text>
                    <Text style={styles.quadrado2}></Text>
                </ScrollView>
                <View style={styles.header}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body:{
        flex:1
    },
    quadrado1:{
        backgroundColor:'#FF0000',
        height:200

    },
    quadrado2:{
        backgroundColor:'#00FF00',
        height:300

    },
    header:{
        backgroundColor:'#0000FF',
        height:100

    }

});
