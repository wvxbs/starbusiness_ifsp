import {createAppContainer, createStackNavigator} from 'react-navigation' 
import SignIn from './../screens/sign/SignIn'
import SignUp from './../screens/sign/SignUp'
import AuthFlow from './../AuthFlow'

const Sign = createAppContainer(
    createStackNavigator(
      {
        signIn : SignIn,
        signUp : SignUp,
      },

    ) 
)

export default Sign