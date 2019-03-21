import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import ReceitaResumo from './ReceitaResumo';
import ReceitaIngredientes from './ReceitaIngredientes';
import ReceitaModo from './ReceitaModo';

const Abas = createMaterialTopTabNavigator({
    ReceitaResumo:{
        screen:ReceitaResumo
    },
    ReceitaIngredientes:{
        screen:ReceitaIngredientes
    },
    ReceitaModo:{
        screen:ReceitaModo
    }
}, {
    animationEnabled:true,
    tabBarOptions:{
        showIcon:false,
        style:{
            backgroundColor:'#EEEEEE'
        },
        labelStyle:{
            fontSize:14,
            height:47,
            lineHeight:47
        },
        activeTintColor:'#333333',
        inactiveTintColor:'#606060'
    }
});
export default createAppContainer(Abas)