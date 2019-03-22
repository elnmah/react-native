import { createStackNavigator, createAppContainer } from 'react-navigation'
import Cadastrar from './src/screens/Cadastrar'
import Logar from './src/screens/Logar'

const AppNavigator = createStackNavigator({
    Cadastrar:{
        screen:Cadastrar,
        navigationOptions:{
            title:'Cadastrar'
        }
    },
    Logar:{
        screen:Logar,
        navigationOptions:{
            title:'Logar'
        }
    }
},{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:'#FF00FF',
            height:100
        },
        headerTintColor:'#FFF',
        headerTitleStyle:{
            fontWeight:'normal',
            fontSize:20
        }
    }
})

export default createAppContainer(AppNavigator)