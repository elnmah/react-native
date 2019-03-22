import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import Firebase from '../../firebase'

export default class Cadastrar extends Component {
    constructor(props){
        super(props)
        this.state ={
            nome:'',
            email:'',
            senha:''
        }

        this.cadastrar = this.cadastrar.bind(this);

        //  se tiver alguma user logado, sera deslogada
        Firebase.auth().signOut()
        // olheiro
        Firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                //user.uid
                Firebase.database().ref('usuarios').child(user.uid).set({
                    nome:this.state.nome

                    //Salvar os dados do usuario em database
                    //e os dados de login no auth

                })
                alert("Usuário criado com sucesso!")

                this.props.navigation.navigate('Logar')
            }

        })

    }
    cadastrar(){
        Firebase.auth().createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error)=>{
            alert(error.code)
        })

    }


    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.h1}>Tela de Cadastro</Text>
                <Text>Nome</Text>
                <TextInput style={styles.input} onChangeText={(nome)=> this.setState({nome})} />
                <Text>E-mail:</Text>
                <TextInput style={styles.input} onChangeText={(email)=> this.setState({email})} />
                <Text>Senha:</Text>
                <TextInput style={styles.input} secureTextEntry={true} onChangeText={(senha)=> this.setState({senha})} />
                <Button title="Cadastrar" onPress={this.cadastrar} />
                <Button title="Ja tenho login" onPress={()=> this.props.navigation.navigate('Logar')} />
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
    }
});
