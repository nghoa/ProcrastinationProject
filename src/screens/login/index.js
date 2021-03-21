import React from 'react';
import {SafeAreaView, Text, TouchableHighlights} from 'react-native';

const LoginScreen = ({navigation}) => (
    <SafeAreaView>
        <Text>Screen: Login</Text>
        <TouchableHighlights onPress={() => navigation.navigate('Home')}>
            <Text>Go to Home</Text>
        </TouchableHighlights>
    </SafeAreaView>
);

export default LoginScreen;