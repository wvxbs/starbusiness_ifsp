import React from 'react'
import {View, Text, ScrollView, TouchableOpacity, AsyncStorage, Animated, ActivityIndicator} from 'react-native'
import Styles from './../../Styles'
import axios from 'axios'
import { translate } from '../../locales';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            hasStablishment : false,
            coupons : [],
            stablishId : 0,
            isLoading : true
        };
    }

    static navigationOptions ={
        header : null
    }

    async componentWillMount () {
        await axios.get('https://codelinepds.herokuapp.com/api/establishment/getBySeller')
        .then(res => {
            if(JSON.stringify(res.data) == "[]"){
                this.setState({hasStablishment : false})
            } else {
                this.setState({hasStablishment : true})
            }
        })

        if(!this.state.hasStablishment) {
            this.props.navigation.replace("createEstablishment")
        }

        var url = "https://codelinepds.herokuapp.com/api/coupon/getByEstablishmentId/103"
        axios.get(url)
        .then(res => {
            this.setState({
                coupons : res.data,
                isLoading : false
            })
        })
    }

    renderCoupons = () => {
        if(JSON.stringify(this.state.coupons) == '[]') {
            return(
                <View>
                    <Text style={{    
                            fontSize : 20,
                            fontWeight : 'bold',
                            textAlign : 'left',
                            width : 'auto',
                            textAlign : 'center',
                            alignContent : 'center',
                            marginTop : 20,
                        }}
                    >
                        {translate('nocupons')}
                    </Text>
                </View>
            )
        } else {
            if(Array.isArray(this.state.coupons)){
                var render = []
                 this.state.coupons.map(coupon =>{
                    render.push(
                        <TouchableOpacity style={Styles.couponCard}>
                        <Text style={Styles.couponCardTitle}>
                            {coupon.description}
                        </Text>
                        </TouchableOpacity>
                    )
                })
                return (
                    <View>
                        <View style={{justifyContent : 'center'}}>
                            {render}
                        </View>
                    </View>
                )
                } else {
                return(
                    <View>
                        <View style={{justifyContent : 'center'}}>
                        <TouchableOpacity style={Styles.couponCard}>
                        <Text style={Styles.couponCardTitle}>
                            {this.state.cupons.description}
                        </Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        }
    }

    render() {
            if(this.state.isLoading) {
                return (
                <View style={{flex : 1,justifyContent : 'center', alignContent : 'center', height:400}}>
                    <ActivityIndicator size="large" color="#000" />
                </View>
                )
            } else {
                return(
                    <View style={Styles.container}>
                    <View style={Styles.noHeaderMarginTop}>
                        <View>
                            <Text style={[Styles.title, {fontSize : 35}]}>
                                {translate('activecoupons')}
                            </Text>
                            <View 
                                style={Styles.couponCardContainer}
                            >
                                {this.renderCoupons()}
                            </View>
                        </View>
                    </View>
                </View>
                )
            }
    }
}

Home.navigationOptions = {
    header : null
}

export default Home