import {Dimensions} from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, //cabecalho
    difficultLevel: 0.1,
    //calcula coluna
    getColumnsAmount(){
        const width = Dimensions.get('window').width;
        return Math.floor(width / this.blockSize)
    },
    //calcula linhas
    getRowsAmount(){
         const totalHeight = Dimensions.get('window').height;
         const boradHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boradHeight / this.blockSize)
    }
};

export default params;