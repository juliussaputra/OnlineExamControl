import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

import startMainStack from '../MainStack/startMainStack';

class AuthScreen extends Component {

    loginHandler() {
        startMainStack();
    }

    render() {
        return(
            <View>
                <Text>Auth Screen</Text>
                <TextInput 
                    placeholder="Username"
                />
                <TextInput 
                    placeholder="Password"
                />
                <Button title="Login" onPress={this.loginHandler} />
            </View>
        );
    }
}

export default AuthScreen;