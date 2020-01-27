import React from 'react'
import {View, ScrollView, Text, ActivityIndicator, TouchableOpacity} from 'react-native'
import Styles from './../../Styles'
import axios from 'axios'
import { translate } from './../../locales';
import SignOut from '../../components/SignOut';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            fullName : '',
            email : '',
            telephone : '',
            cpf : '',
            isLoading : true
         };
    }

    static navigationOptions = {
        header : null
    }

    componentWillMount () {
        axios.get('https://codelinepds.herokuapp.com/api/user').then(res =>{
            this.displayProfileData(res.data)
            this.setState({isLoading : false})
        })
    }

    displayProfileData  = (profile) => {
        var name = "" + profile.firstName + " " + profile.lastName + ""
        this.setState({
            name : profile.firstName,
            fullName : name,
            email : profile.email,
            telephone : profile.telephone,
            cpf : profile.cpf
        })
    }

    render() {
        if(this.state.isLoading) {
            return (
            <View style={{flex : 1,justifyContent : 'center', alignContent : 'center', height:400}}>
                <ActivityIndicator size="large" color="#000" />
            </View>
            )
        } else {
        return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[Styles.container, Styles.noHeaderMarginTop]}>
            <View>
                <Text style={[Styles.title, {marginTop : 10}]}>
                    {this.state.name}
                </Text>
                <View style={{marginTop:17}}>
                    <Text style={[Styles.label]}>
                        {translate('email')}: 
                        <Text style={[Styles.infoLabel]}>
                            {this.state.email}
                        </Text>
                    </Text>
                    <Text style={[Styles.label, {marginTop : 10}]}>
                        {translate('telephone')}: 
                        <Text style={[Styles.infoLabel]}>
                            {this.state.telephone}
                        </Text>
                    </Text>
                    <Text style={[Styles.label, {marginTop : 10}]}>
                        {translate('cpf')}: 
                        <Text style={[Styles.infoLabel]}>
                            {this.state.cpf}
                        </Text>
                    </Text>
                </View>
                <TouchableOpacity onPress={() => SignOut(this.props.navigation)}>
                    <Text style={[Styles.textButton, {fontSize : 25,}]}>
                        {translate('exit')}
                    </Text>
                </TouchableOpacity>
            </View>
    </ScrollView>
        );
    }}
}

export default Profile;