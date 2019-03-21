import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';

export default class Item extends Component{
    constructor(props){
        super(props)
        this.state={
            done:(this.props.data.done == '1') ? styles.done : styles.undone
        }
        this.marcar = this.marcar.bind(this);
        this.excluir = this.excluir.bind(this);
    }

    marcar(){
        let state = this.state

        let done = 'sim'

        if(this.state.done == styles.undone){
            state.done = styles.done
            done = 'sim'
        }else{
            state.done = styles.undone
            done = 'nao'
        }

        fetch(this.props.url+'/'+this.props.data.id, {
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                done:done
            })
        })
            .then((r) => r.json())
        this.setState(state)
    }

    excluir(){
        fetch(this.props.url+'/'+this.props.data.id, {
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
            .then((r) => r.json())
            .then((json) =>{
                this.props.loadFunction()
            })

    }

    render(){
        return(
            <View style={styles.area}>
                <TouchableHighlight style={[styles.marcarArea, this.state.done]} onPress={this.marcar}>
                    <View>

                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>{this.props.data.item} </Text>
                <Button style={styles.botao} title="X" onPress={this.excluir} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    area:{
        flex:1,
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:10,
        borderBottomWidth:1,
        borderColor:'#ccc',
        alignItems:'center'
    },
    text:{
        padding:10
    },
    marcarArea:{
        height:40,
        width:40,
        marginLeft:10,
        marginRight:10

    },
    undone:{
        backgroundColor:'#ccc'
    },
    done:{
        backgroundColor:'#00FF00'
    },
    botao:{
        width:10,
        height:40
    }
})