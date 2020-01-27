import {createAppContainer, createStackNavigator } from 'react-navigation'
import SignIn from './../screens/sign/SignIn'
import SignUp from './../screens/sign/SignUp'

const Signed = createAppContainer(
    createStackNavigator(
        {
        signIn : SignIn,
        signUp : SignUp
        },
        {
            initialRouteName: 'signIn',
            defaultNavigationOptions: {
              headerStyle: {
                backgroundColor: '#fff',
                borderBottomColor : '#fff'
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
                },
            },
        }
    ) 
)

export default Signed