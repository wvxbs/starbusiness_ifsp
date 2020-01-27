import {createAppContainer,  createSwitchNavigator, createStackNavigator } from 'react-navigation'
import SignIn from './screens/sign/SignIn'
import SignUp from './screens/sign/SignUp'
import React from 'react';
import axios from 'axios'
import { translate } from './locales'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import HomeTabNavigator from './navigation/HomeTabNavigator';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  logIn = async (request) => {
    await axios.post('https://codelinepds.herokuapp.com/login/seller', request, {
      headers : {
        "Content-Type" : "application/json"
      }
  }).catch(err =>{
    alert(translate('disconnected'))
    this.props.navigation.navigate("Auth")
  })
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    var request 
    if(userToken !== null) {
      AsyncStorage.multiGet(['email', 'password']).then((data) => {
        const email = data[0][1];
        const password = data[1][1];
        request = JSON.stringify({
          email : email,
          password : password
        }) 
        this.logIn(request)
    })
    }

    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={{flex : 1, justifyContent : 'center', alignContent : 'center'}}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
}

const AppStack = createStackNavigator(
    {
        home : HomeTabNavigator
    },
    {
        initialRouteName :'home',
        defaultNavigationOptions: {
          header : null
            /*headerStyle: {
              backgroundColor: '#fff',
              borderBottomColor : '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            }*/
        }
    }
    );
const AuthStack = createStackNavigator(
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
          }
        }
    );

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));