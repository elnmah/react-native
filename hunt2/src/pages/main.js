import React , {Component} from 'react';
import {View , Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../services/api'

export default class Main extends Component{
    //colocar o nome da toolbar kkk
    static navigationOptions = {
        title: "JSHunt"
    };

    state = {
        productInfo:{},
        docs: [],
        page:1,
    };
//disparado assim que o component é exibido na tela, metodo inicial
    componentDidMount(){
        this.loadProducts();
    }
    // usar a função desta maneira para que não crie um nome escopo de função e sim use
    // o proprio escopo da classe, assim conseguimos usar o this na nossa propria funcao
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?pages=${page}`);
        const { docs, ...productInfo } = response.data;
// passa as variavgeis que quer alterar - -sobreescreve as informacoes do estado setState
//paga pegar todos os itens anteriores ...
        this.setState({docs:[... this.state.docs, ...docs], productInfo, page });
    };

    loadMore = () => {
        const { page, productInfo} = this.state

        if(page === productInfo.page) return;
        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    };
    renderItem = ({item}) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.productButton} onPress={() => {
                this.props.navigation.navigate('Product', {product: item})
            }}>
                <Text style={styles.productButtonText}> Acessar </Text>
            </TouchableOpacity>
        </View>
    );
    //percorrer um array -> map
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    contentContainerStyle={styles.list}
                    data={this.state.docs}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.1}
                />
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
        fontsize:18,
        fontWeight:'bold',
        color:'#333'

    },
    productDescription:{
        fontsize:16,
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
        fontsize:16,
        color:'#DA552F',
        fontWeight:'bold',

    }

});