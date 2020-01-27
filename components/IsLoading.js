import React from 'react'
import {Text, ActivityIndicator} from 'react-native'
import Styles from './../Styles'

IsLoading = props => {
    if(props.IsLoading){
        return (
          <ActivityIndicator 
            style={{
                marginLeft : 'auto', 
                marginRight : 'auto',
                marginTop : 'auto', 
                marginBottom : 'auto'
            }}
          />
        )
    } else {
      return (
        <Text style={Styles.buttonText}>
          {props.text}
        </Text>
      )
    }
}

export default IsLoading