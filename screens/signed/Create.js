import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, AsyncStorage, Animated, TextInput , KeyboardAvoidingView, Image } from 'react-native'
import Styles from './../../Styles'
import IsLoading from './../../components/IsLoading'
import { translate } from '../../locales';

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : null,
            password : null,
            isLoading : false,
            response : 0,
            responseStatus : 0,
            profileId : 0,
            qurcodeurl : ''
          };
    }

    static navigationOptions = {
        header : null
    }

    componentWillMount() {
        var value =  AsyncStorage.getItem('userToken');
        this.setState({
            profileId : value
        })
        console.log(JSON.stringify(value))
    }

      submitData = (description) => {
        var url = "https://chart.googleapis.com/chart?chs=150x150&chl=" + description.replace(/\s/g, '') + "&choe=UTF-8"

          this.setState({qurcodeurl : url})
      }

    render () {
      var description

      return(
          <KeyboardAvoidingView behavior="padding" style={[Styles.noHeaderMarginTop, Styles.container]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <Text style={[Styles.title, {marginTop : 10}]}>
                        {translate('createcoupon')} 
                    </Text>
                    <View style={{marginTop:17}}>
                        <Text
                            style={Styles.label}
                        >
                            {translate('description')}
                        </Text>
                        <View>
                            <TextInput 
                                style={Styles.textInput} 
                                type="text"
                                placeholder="Ex: gustabo@email.com"
                                onChangeText={(input) =>{
                                  description = input
                                }}
                                value={description}
                            />
                        </View>    
                    </View>
                  </View>
                  <View>
                    <View>
                      <Image 
                        source={{uri : this.state.qurcodeurl}}
                        style={{width : 300, height : 300}}
                      />              
                    </View>
                  </View>
                  <TouchableOpacity 
                        onPress={()=>{
                            this.props.navigation.navigate("scanner")
                        }} 
                        style={Styles.button}
                    >
                      <IsLoading 
                        isLoading={this.state.isLoading} 
                        text={translate('preview')}
                      />
                    </TouchableOpacity>
                  <View style={{justifyContent : 'center', marginTop : 16}}>
                    <TouchableOpacity 
                        onPress={()=>{
                            this.submitData(description)
                        }} 
                        style={Styles.button}
                    >
                      <IsLoading 
                        isLoading={this.state.isLoading} 
                        text={translate('create')}
                      />
                    </TouchableOpacity>
                  </View>
              </ScrollView>
          </KeyboardAvoidingView>
      )
    }
}

export default Create;