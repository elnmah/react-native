import React  from 'react';
import { createDrawerNavigator } from 'react-navigation';
import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import Inverter, { MegaSena } from './components/Multi';
import Contador from './components/Contador';
import Plataformas from './components/Plataformas';
import ValidarProps from './components/ValidarProps';

//lista dos menus e componente que vai ser carregado quando o usuario clicar no menu
export default createDrawerNavigator ({
    ValidarProps:{
        screen: () => <ValidarProps label={"Teste: "}  ano={18}/>
    },
    Platformas:{
        screen: Plataformas
    },
    Contador: {
        screen: () => <Contador numeroInicial={1000}/>
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8}/>,
        navigationOptions:{ title: 'Mega Sena'}
    },
    Inverter:{
        screen: () => <Inverter texto={'React Nativo! '}/>
    },
    ParImpar:{
        screen: () => <ParImpar numero={30}/>,
        navigationOptions: {title : 'Par & Impar'}
    },
    Simples:{
        screen: () => <Simples texto={'Flexível!!'}/>
    }

}, {drawerWidth: 300 })