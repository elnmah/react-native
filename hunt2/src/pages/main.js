import React , {Component} from 'react';
import {View , Text, FlatList, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import api from '../services/api'

export default class Main extends Component{
    //colocar o nome da toolbar kkk
    static navigationOptions = {
        title: "JSHunt"
    };

    state = {
        users: []
    };
//disparado assim que o component é exibido na tela, metodo inicial
    componentDidMount(){
        this.loadProducts();
    }
    // usar a função desta maneira para que não crie um nome escopo de função e sim use
    // o proprio escopo da classe, assim conseguimos usar o this na nossa propria funcao
    loadProducts = async (page = 1) => {
        const response = await api.get(`/user?pages=${page}`);
        let users = response.data;
// passa as variavgeis que quer alterar - -sobreescreve as informacoes do estado setState
//paga pegar todos os itens anteriores ...
        this.setState({users:[... this.state.users, ...users] });
    };

    renderItem = ({item}) => (
        <View style={styles.productContainer} id={item._id}>
            <Text style={styles.productTitle}>{item.status}</Text>
            <Text style={styles.productTitle}>{item.nome}</Text>
            <Text style={styles.productTitle}>{item.dataCadastro}</Text>
        </View>
    );
    handlePress = async () => {
        fetch('http://192.168.0.111:3000/v1/user', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: 'test'
            })
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
            })
            .done();
    }

    //percorrer um array -> map
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.users}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
                <View style={styles.container}>
                    <TouchableOpacity style={styles.productButton} onPress={this.handlePress.bind(this)}>
                        <Text> ADD </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fafafa',

    },
    list:{
        padding:20,

    },
    productContainer:{
        backgroundColor: '#FFF',
        borderWidth:1,
        borderColor:'#DDD',
        borderRadius:5,
        padding:20,
        marginBottom:20
    },
    productTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333'

    },
    productDescription:{
        fontSize:16,
        color:'#999',
        marginTop:5,
        lineHeight:24,
    },
    productButton:{
        height:42,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#DA552F',
        backgroundColor:'transparent',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,

    },
    productButtonText:{
        fontSize:16,
        color:'#DA552F',
        fontWeight:'bold',

    }

});