import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native'

const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width : 'auto',
        height : 'auto'
    },
    noHeaderMarginTop : {
        marginTop : 49
    },
    title : {
        fontSize : 40,
        fontWeight : 'bold',
        textAlign : 'left',
        width : wp(90)
    },
    label : {
        fontWeight : "bold",
        fontSize: 20
    },
    infoLabel : {
        fontWeight : "normal",
        fontSize: 20
    },
    textInput : {
        backgroundColor : '#f5f5f5',
        borderRadius : 5,
        width: wp(90),
        height : 50
    },
    button : {
        backgroundColor : '#000',
        borderRadius : 5,
        width: wp(90),
        height : 50,
        margin : 'auto',
        marginTop : 10,
        textAlign : 'center',
        alignContent : 'center',
        flex : 1
    },
    buttonText : {
        fontWeight : 'bold',
        textAlign : 'center',
        alignContent : 'center',
        height : 'auto',
        width :'auto',
        marginTop : 'auto',
        marginBottom : 'auto',
        fontSize : 17,
        color : '#fff'
    },
    textButton : {
        width : wp(90),
        textAlign : 'center',
        fontSize : 15,
        padding : 16,
        fontWeight : 'bold'
    },
    couponCardContainer : {
        width : wp(90)
    },
    couponCard : {
        width : wp(70),
        marginLeft : 'auto',
        marginRight : 'auto',
        marginTop : 20,
        padding : 10,
        borderRadius : 10,
        backgroundColor : '#f5f5f5'
    },
    couponCardTitle : {
        fontSize : 20,
        fontWeight : 'bold'
    },

    //scanner
      bottomBar: {
        position: 'absolute',
        top : 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        flexDirection: 'row',
      },
      url: {
        flex: 1,
      },
      urlText: {
        color: '#fff',
        fontSize: 20,
      },
      cancelButton: {
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      cancelButtonText: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: 18,
      }
})

export default Styles