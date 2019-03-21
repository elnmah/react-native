import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput, Picker, Slider, Switch, Button} from 'react-native';

export default class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorSw:false,
            altura:1,
            peso:65,
            genero:0,
            day:0,
            month:0,
            year:0,
            generos:[
                {nome:'Masculino'},
                {nome:'Feminino'},
            ],
            dias:[
                {dia:'1'},
                {dia:'2'},
                {dia:'3'},
            ],
            meses:[
                {mes:'01'},
                {mes:'02'},
                {mes:'03'},
            ],
            anos:[
                {ano:'1996'},
                {ano:'1997'},
                {ano:'1998'},
            ],
        }
    }
    salvar() {
        alert("Altura: "+this.state.altura + "Peso:"+ this.state.peso)
    }

    render() {

        let diasItems = this.state.dias.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.dia} />
        })
        let mesesItems = this.state.meses.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.mes} />
        })
        let anosItems = this.state.anos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.ano} />
        })
        let generoItems = this.state.generos.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.nome} />
        })

        return (

            <View style={styles.container}>
              <ScrollView>
                <Text style={styles.texto}>Dados pessoais</Text>
                <View style={styles.conteudo}>
                  <Text>Nome</Text>
                  <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}  placeholder="Ex: Maria da silva" />
                  <Text>Data de Nascimento</Text>
                  <View style={{ flexDirection:'row'}}>
                    <Picker style={{width:100}} selectedValue={this.state.day} onValueChange={(itemValue,itemIndex) => this.setState({day:itemValue})}>
                        {diasItems}
                    </Picker>
                    <Picker style={{width:100}} selectedValue={this.state.month} onValueChange={(itemValue,itemIndex) => this.setState({month:itemValue})}>
                        {mesesItems}
                    </Picker>
                    <Picker style={{width:100}} selectedValue={this.state.year} onValueChange={(itemValue,itemIndex) => this.setState({year:itemValue})}>
                        {anosItems}
                    </Picker>
                  </View>
                  <Text>Sexo</Text>
                  <Picker selectedValue={this.state.genero} onValueChange={(itemValue,itemIndex) => this.setState({genero:itemValue})}>
                      {generoItems}
                  </Picker>
                  <Text>Altura</Text>
                    <Slider value={this.state.altura} minimumValue={1} maximumValue={3} onValueChange={(altura)=>this.setState({altura:altura})} />
                  <Text>Peso</Text>
                    <Slider value={this.state.peso} minimumValue={10} maximumValue={300} onValueChange={(peso)=>this.setState({peso:peso})} />
                  <Text>é doados de orgãos?</Text>
                  <Switch value={this.state.valorSw} onValueChange={(v) => this.setState({valorSw:v})} />
                  <Button title="Salvar" onPress={this.salvar}/>
                </View>
              </ScrollView>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        textAlign:'center'

    },
    texto:{
        fontSize:16,
        fontWeight:'bold',
        justifyContent: 'center',
        textAlign:'center'

    },
    conteudo:{
        justifyContent:'center',
        padding:20

    }
});
