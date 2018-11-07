import React from 'react'
import {View, Text} from 'react-native'

const fonte = {style: {fontSize: 30}}


export const Filho = props =>
    <View>
        <Text {...fonte}>Filho:{props.nome}{props.sobrenome} </Text>
    </View>;

export const Pai = props =>
    <View>
        <Text {...fonte}> {props.nome} {} </Text>
    </View>;