
import React, {Component} from 'react';
import {StyleSheet, View, StatusBar, Button, Modal} from 'react-native';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            statusStyle:'dark-content',
            bgColor:'#FFFFFF'
        };

        this.abrirModal = this.abrirModal.bind(this);
        this.fecharModal = this.fecharModal.bind(this);
    }


    abrirModal() {
        let s = this.state;

        s.modalVisible = true;
        s.statusStyle = 'light-content';
        s.bgColor = '#000000';

        this.setState(s);
    }


    fecharModal(){
        let s = this.state;

        s.modalVisible = false;
        s.statusStyle = 'dark-content';
        s.bgColor = '#FFFFFF';

        this.setState(s);
    }


    render() {
        return (
            <View style={[styles.body,{backgroundColor:this.state.bgColor}]}>

                <Modal animationType="slide" visible={this.state.modalVisible}>
                    <View style={styles.modal}>
                        <Button title="Fechar Modal" onPress={this.fecharModal} />
                        <StatusBar barStyle={this.state.statusStyle} />
                    </View>
                </Modal>

                <Button title="Abrir Modal" onPress={this.abrirModal} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        paddingTop:25,
        justifyContent:'center',
        alignItems:'center'
    },
    modal:{
        flex: 1,
        paddingTop:25,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000000'
    }
});
