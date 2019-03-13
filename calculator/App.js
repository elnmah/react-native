import React, {Component} from 'react';
import {StyleSheet, View, } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
    displayValue:'0',
    clearDisplay: false,
    operation:null,
    values:[0,0],
    current:0,

};

export default class App extends Component {
    // ... faz um clone de initialState
    state = {... initialState};

    addDigit = n =>{
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + n;
        this.setState({displayValue, clearDisplay: false});

        if(n !== '.'){
            const newValue = parseFloat(displayValue);
            const values = [... this.state.values];
            //baseado no current o values sera serado ou no indice 0 ou 1
            values[this.state.current] = newValue;
            this.setState({values});
        }
    };
    clearMemory = () => {
        this.setState({...initialState});
    };

    setOperation = operation => {
        if(this.state.current === 0){
            //armazena a operação, armazena o numero digitado no indice 1 do current, e apaga o display quando digitar o proximo numero
            this.setState({operation , current: 1, clearDisplay:true })
        }else {
            const equals = operation === '=';
            const values = [... this.state.values];
            try{
                values[0] = eval (`${values[0]} ${this.state.operation} ${values[1]}`);

            }catch (e){
                values[0] = this.state.values[0];
            }

            values[1] = 0;
            this.setState({
                //o resultado sempre vai p digito 0
                displayValue:values[0],
                operation: equals ? null : operation ,
                current: equals ? 0 : 1,
                // clearDisplay: !equals,
                clearDisplay: true,
                values,
            })
        }

    };

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.buttons}>
                    <Button label={'AC'} triple onClick={this.clearMemory}/>
                    <Button label={'/'} operation onClick={this.setOperation}/>
                    <Button label={'7'} onClick={this.addDigit}/>
                    <Button label={'8'} onClick={this.addDigit}/>
                    <Button label={'9'} onClick={this.addDigit}/>
                    <Button label={'*'} operation onClick={this.setOperation}/>
                    <Button label={'4'} onClick={this.addDigit}/>
                    <Button label={'5'} onClick={this.addDigit}/>
                    <Button label={'6'} onClick={this.addDigit}/>
                    <Button label={'-'} operation onClick={this.setOperation}/>
                    <Button label={'1'} onClick={this.addDigit}/>
                    <Button label={'2'} onClick={this.addDigit}/>
                    <Button label={'3'} onClick={this.addDigit}/>
                    <Button label={'+'} operation onClick={this.setOperation}/>
                    <Button label={'0'} double onClick={this.addDigit}/>
                    <Button label={'.'} onClick={this.addDigit}/>
                    <Button label={'='} operation onClick={this.setOperation}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    buttons:{
        flexDirection:'row',
        flexWrap:'wrap',
    }
});
