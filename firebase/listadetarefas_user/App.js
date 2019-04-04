import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Firebase from './firebase'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            nome:'',
            email:'',
            senha:'',
            uid:'',
            addItemTxt:''
        }

        this.logar = this.logar.bind(this);
        this.add = this.add.bind(this);

        // se tiver alguma user logado, sera deslogada
        Firebase.auth().signOut()
        //olheiro
        Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                let s = this.state
                s.uid = user.uid
                this.setState(s)
                //user.uid
                Firebase.database().ref('usuarios').child(user.uid).once('value').then((snapshot) =>{
                    let nome = snapshot.val().nome
                    alert("Seja bem vindo(a)," + nome)
                })
            }
        })

    }
    logar(){
        Firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error)=>{
            alert(error.code)
        })
    }
    add(){
        if(this.state.uid != ''){

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Tela de login</Text>
                <Text>E-mail:</Text>
                <TextInput style={styles.input} onChangeText={(email)=> this.setState({email})} />
                <Text>Senha:</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(senha)=> this.setState({senha})} />
                <Button title="Logar" onPress={this.logar} />
                <View style={styles.addArea}>
                    <Text>Adicione um item</Text>
                    <TextInput style={styles.input} onChangeText={(addItemTxt)=> this.setState({addItemTxt})}/>
                    <Button title="Adcionar" onPress={this.add} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:20,
    },
    h1:{
        fontSize:28,
        textAlign:'center',
        margin:20
    },
    input:{
        height:40,
        borderWidth:1,
        borderColor:'#000',
        margin:10
    },
    addArea:{

    }
});
