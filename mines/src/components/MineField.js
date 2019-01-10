import React from 'react'
import {View, StyleSheet} from 'react-native'
import Field from './Field'

export default props => {
    const rows = props.board.map((row, r) => {
        // pra cada uma das linhas vai ter um field que é objeto que foi criado
        const columns = row.map((field, c) => {
            // sempre que retornar um array de elementos JSX é importante ter a chave
            return <Field {... field} key={c}
                          onOpened={() => props.onOpenField(r, c)}
                          onSelected={e => props.onSelectField(r, c)}/>
        });
        //cada view vai ter um field
        return <View key={r}
        style={{flexDirection:'row'}}>{columns}</View>
    });
    // todas as linhas do tabuleiro
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#EEE'
    }
});