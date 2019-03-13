import React, {Component} from 'react';
import { Text, View, Button, StyleSheet} from 'react-native';

export default class Feed extends Component{

    static navigationOptions= {
        title:'Feed',
        header:null
    }

    render(){
        return(
			<View style={styles.container}>
				<Text>FEED</Text>
				<Button  title='ver Perfil' onPress={() => this.props.navigation.navigate('Perfil')} />
			</View>
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})