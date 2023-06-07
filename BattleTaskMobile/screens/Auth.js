import { useFonts } from 'expo-font';
import React, { useEffect, useRef, useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, ScrollView, Image, View, TouchableOpacity, Button } from 'react-native'
import { colors } from '../Colors';
import Header from '../components/Header';
import { Keyboard } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Footer from '../components/Footer';
import Constants from 'expo-constants'
import { authenticateUser, checkIfUsernameTaken, storeUserData } from '../actions/AuthActions';
import {authentification} from '../actions/AppActions';
import {AsyncStorage} from 'react-native';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice';
import { setUser } from '../features/userSlice'
import { LinearGradient } from 'expo-linear-gradient'

const Auth = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [signupStatus, setSignupStatus] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');

    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    return (
        <LinearGradient style={styles.authcontainer} class="authcontainer" start={{ x: -0.2, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(241, 65, 74, 0.3)', 'rgba(125, 88, 137, 0.3)', 'rgba(6, 160, 129, 0.3)', 'rgba(220, 223, 229, 0)']}>
                <Image
                    style={styles.authImage}
                    source={require('../assets/battletasklogo.png')}
                    resizeMode="contain"
                />
                <Text style={[styles.authSubtitle, fontsLoaded && {
                        fontFamily: 'Ubuntu-Medium'
                }]}>{signupStatus ? 'Créer ton compte': 'Connexion'}</Text>
                <View style={styles.authInputContainer}>
                    <Ionicons name="person" size={24} color={colors.darkBlue} />
                    <View style={styles.authInputBox}>
                        <Text style={[styles.inputlabel,
                            fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                        ]}>Email :</Text>
                        <TextInput
                            style={[styles.usernameInput, fontsLoaded && {fontFamily: 'Ubuntu-Light'}]}
                            placeholder="Entre ton email"
                            onChangeText={val=>setUsername(val)}
                            value={username}
                        />
                    </View>
                </View>
                {signupStatus && (
                    <View style={styles.authInputContainer}>
                    <Ionicons name="person" size={24} color={colors.darkBlue} />
                    <View style={styles.authInputBox}>
                        <Text style={[styles.inputlabel,
                            fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                        ]}>Pseudo :</Text>
                        <TextInput
                            style={[styles.usernameInput, fontsLoaded && {fontFamily: 'Ubuntu-Light'}]}
                            placeholder="Entre ton pseudo"
                            onChangeText={val=>setUsername(val)}
                            value={username}
                        />
                    </View>
                </View>
                )}
                <View style={styles.authInputContainer}>
                    <Feather name="key" size={24} color={colors.darkBlue} />
                    <View style={styles.authInputBox}>
                        <Text style={[styles.inputlabel,
                            fontsLoaded && {fontFamily: 'Ubuntu-Light'}
                        ]}>Password:</Text>
                        <TextInput
                            style={[styles.usernameInput, fontsLoaded && {fontFamily: 'Ubuntu-Light'}]}
                            placeholder="Entre ton mots de passe"
                            secureTextEntry={true}
                            onChangeText={val=>setPassword(val)}
                            value={password}
                        />
                    </View>
                </View>
                <Button
                    title={signupStatus ? 'INSCRIPTION' : "CONNEXION"} 
                    onPress={async () => {
                        var t = authentification(username, password);
                        const jwt = await AsyncStorage.getItem('jwt');
                        if(jwt != "")[
                            dispatch(openScreen({screen: 'home'}))
                        ]
                        }}                
                />
                <TouchableOpacity style={{padding: 10}}
                onPress={()=>{setSignupStatus(!signupStatus); setErrorMsg(''); setPassword(''); setUsername('');}}>
                    <Text style={[styles.hintMsg, fontsLoaded && {
                        fontFamily: 'Ubuntu-Light',
                    }]}>{signupStatus ? 'Tu possède un compte ? Connexion' : "Tu ne possède pas de compte ? Inscription"}</Text>
                </TouchableOpacity>
                <View style={{padding: 10}}>
                    <Text style={[styles.hintMsg, fontsLoaded && {
                        fontFamily: 'Ubuntu-LightItalic',
                        color: 'red'
                    }]}>{errorMsg}</Text>
                </View>
            </LinearGradient>
    )
}

export default Auth

const styles = StyleSheet.create({
    keyboardAvoider: {
        height: 100,
        backgroundColor: colors.clearWhite,
    },
    authcontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.clearWhite,
    },
    authImage: {
        margin: 20,
        width: Dimensions.get('screen').width,
        height: 120
    },
    authSubtitle: {
        color: colors.dark,
        fontSize: 25,
        marginBottom: 10
    },
    usernameInput: {
        // backgroundColor: colors.darkBlue,
        fontSize: 20,
        marginBottom: 10,
        fontSize: 14,
        color: colors.dark
    },
    authInputContainer: {
        borderColor: colors.darkBlue,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 20,
        width: '80%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    inputlabel: {
        fontSize: 18,
        color: colors.lightBlue,
        paddingTop: 10,
        paddingBottom: 0
    },
    authInputBox: {
        flex: 1,
        paddingLeft: 15,
        marginLeft: 15,
        borderLeftColor: colors.darkBlue,
        borderLeftWidth: 1
    },
    hintMsg: {
        fontSize: 14,
        color: colors.darkGray
    }
})
