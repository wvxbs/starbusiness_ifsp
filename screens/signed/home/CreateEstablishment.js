import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, KeyboardAvoidingView, AsyncStorage, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Styles from './../../../Styles'
import axios from 'axios'
import { translate } from './../../../locales'

class CreateEstablishment extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    static navigationOptions = {
        headerLeft : null,
        gesturesEnabled: false,
        header : null,
        tabBarVisible : false
    }

    getCoordsFromName(loc) {
        this.updateState({
          latitude: loc.lat,
          longitude: loc.lng,
        });
      }

    submitData = (email, firstName, lastName, cpf, password) => {
        data = JSON.stringify({
            "name": name,
            "zipcode": zipcode,
            "country": "Brazil",
            "state": state,
            "city": city,
            "address": street,
            "number": number,
            "category": category,
            "description": description,
            "complement": complement,
            "email": email,
            "telephone": phone,
            "site": "",
            "logoImgPath": "",
            "sellerId": ""
        })

        axios.post('https://codelinepds.herokuapp.com/api/establishment', data, {
            headers : {
                "Content-Type" : "application/json"
            },
            withCredentials : true
        }).catch(err =>{
            alert(JOSN.stringify(err))
        })
    }

    render() {
        var email, firstName, lastName, cpf, password

        AutoComplete = props => {
            return (
                <GooglePlacesAutocomplete
                    query={{key : 'AIzaSyD0k2G5Qcwr-KxVYyRBZL4NuelnR1xuORk'}}
                    placeholder={translate('addressHolder')}
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    fetchDetails={true}
                    onPress={(data, details = null) => {

                    alert(details.geometry.location)

                    }}
                    styles={{
                        container : {
                            width: wp(90),
                        },
                        textInputContainer: {
                            backgroundColor : '#f5f5f5',
                            borderRadius : 5,
                            width: wp(90),
                            height : 50,
                            marginTop : 17,
                            borderColor : '#f5f5f5'
                        },
                        textInput: {
                            padding :0,
                            backgroundColor : '#f5f5f5',
                            borderColor : '#f5f5f5',
                            width: wp(90),
                        },
                        predefinedPlacesDescription: {
                         color: '#000'
                        },
                    }}
                    currentLocation={true}
                />
            )
        }

        return (
            <KeyboardAvoidingView behavior="padding" style={[Styles.noHeaderMarginTop, Styles.container]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <View>
                    <Text style={[Styles.title, {marginTop : 10}]}>
                        {translate('createEstablishment')} 
                    </Text>
                    <View style={{marginTop:17}}>
                          <Text
                              style={Styles.label}
                          >
                              {translate('name')}
                          </Text>
                          <View>
                              <TextInput 
                                  style={Styles.textInput} 
                                  type="text"
                                  placeholder="Ex: Gabriel"
                                  onChangeText={(input) =>{
                                    firstName = input
                                  }}
                                  value={firstName}
                              />
                          </View>    
                      </View>
                      <View style={{marginTop:17}}>
                          <Text
                              style={Styles.label} 
                          >
                              {translate('complement')}
                          </Text>
                          <View>
                              <TextInput 
                                  style={Styles.textInput} 
                                  type="text"
                                  placeholder="Ex: Gabriel"
                                  onChangeText={(input) =>{
                                    firstName = input
                                  }}
                                  value={firstName}
                              />
                          </View>    
                      </View>
                      <View style={{marginTop:17}}>
                          <Text
                              style={Styles.label}
                          >
                              {translate('category')}
                          </Text>
                          <View>
                              <TextInput 
                                  style={Styles.textInput} 
                                  type="text"
                                  placeholder="Ex: Gabriel"
                                  onChangeText={(input) =>{
                                    firstName = input
                                  }}
                                  value={firstName}
                              />
                          </View>    
                      </View>
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
                                  placeholder="Ex: Gabriel"
                                  onChangeText={(input) =>{
                                    firstName = input
                                  }}
                                  value={firstName}
                              />
                          </View>    
                      </View>
                      <View style={{marginTop:17}}>
                        <Text
                            style={Styles.label}
                        >
                            {translate('adress')}
                        </Text>
                        <View>
                            <AutoComplete />
                        </View>
                      </View>
                    </View>
                    <View style={{justifyContent : 'center', marginTop : 16, marginBottom : 20}}>
                      <TouchableOpacity 
                          onPress={()=>{
                            this.submitData(email, firstName, lastName, cpf, password)
                          }} 
                          style={Styles.button}
                      >
                          <Text style={Styles.buttonText}>
                            Cadastre-se
                          </Text>
                      </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

export default CreateEstablishment;