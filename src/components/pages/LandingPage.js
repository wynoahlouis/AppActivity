import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

function LandingPage() {
    const navigation = useNavigation();
    const handleLoginPress = () => {
    // Navigate to the Login page
        navigation.navigate('Login')
    };
    const handleSignupPress = () => {
        navigation.navigate('Register')
    };
  return (
    <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/logofinal.png')} style={styles.logo} resizeMode='contain'/>
        <Text style={styles.subHeading}>Where learning finds its perfect match!</Text>
        <View style={styles.loginsignup}>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
                <Text style={styles.loginText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signupButton} onPress={handleSignupPress}>
                <Text style={styles.SignupText}>
                    Signup
                </Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#ffffff',
    },
    loginsignup:{
        marginTop: 15,
    },
    subHeading: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: -80,
        marginBottom: 20,
      },
    loginButton:{
        marginTop: 20,
        width: 300,
        padding: 15,
        textAlign: 'center',
        backgroundColor:'#DA0C81',
        color:'#FFFFFF',
        fontSize: 25,
        borderRadius: 25,
        elevation: 10,
    },
    signupButton:{
        marginTop: 20,
        width: 300,
        padding: 15,
        display: 'flex',
        textAlign: 'center',
        borderRadius: 25,
        elevation: 10,
        backgroundColor:'#E8EAED',
    },
    loginText:{
        textAlign: 'center',
        color:'#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold',
    },
    SignupText:{
        textAlign: 'center',
        color:'black',
        fontSize: 25,
        fontWeight: 'bold',
    },
    logo:{
        width: 350,
        height: 350,
        marginTop: -150,
        marginBottom: 0,
    }
}
)
export default LandingPage;