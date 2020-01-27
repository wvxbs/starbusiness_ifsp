import React from 'react';
import { Platform } from 'react-native'
import  {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import TabBarIcon from './../components/TabBarIcon'
import Home from './../screens/signed/Home'
import Profile from '../screens/signed/Profile';
import Create from '../screens/signed/Create';
import CreateEstablishment from '../screens/signed/home/CreateEstablishment';
import Scanner from '../screens/signed/create/Scanner';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    home: Home,
    createEstablishment : {screen : CreateEstablishment, navigationOptions : {tabBarVisible: false}}
  },
  config
);

HomeStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? 'ios-albums'
          : 'md-albums'
      }
    />
  )
}

HomeStack.path = '';

const CreateStack = createStackNavigator(
  {
    create: Create,
    scanner : Scanner
  },
  {
    initialRouteName: 'create',
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
    },
    config
);

CreateStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'} />
  ),
};

CreateStack.path = '';

const ProfileStack = createStackNavigator(
  {
    profile: Profile,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarOptions: { showLabel: false },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'  } />
  ),
};

ProfileStack.path = ''; 

const HomeTabNavigator = createBottomTabNavigator({
  HomeStack,
  CreateStack,
  ProfileStack
});

HomeTabNavigator.path = '';

export default HomeTabNavigator;