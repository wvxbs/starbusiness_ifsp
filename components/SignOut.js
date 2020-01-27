import React from 'react'
import axios from 'axios'
import { AsyncStorage } from 'react-native'

export default signOutAsync = (navigation) => {
    axios.get('https://codelinepds.herokuapp.com//logout')
    AsyncStorage.clear();
    navigation.navigate('Auth');
};