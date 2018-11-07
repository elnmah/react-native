import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/Padrao'

//componente baseado em função

// export default function (props) {
//     //props - propriedade texto - atributo
//     return <Text>{props.texto}</Text>
// }


export default (props) =>
    //props - propriedade texto - atributo
     <Text style={Padrao.ex }>Arrow: {props.texto}</Text>
