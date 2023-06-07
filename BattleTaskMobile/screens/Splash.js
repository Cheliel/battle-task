import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice'

const Splash = () => {
    const dispatch = useDispatch();
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
    });
    return (
        <LinearGradient start={{ x: -0.2, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(241, 65, 74, 0.3)', 'rgba(125, 88, 137, 0.3)', 'rgba(6, 160, 129, 0.3)', 'rgba(220, 223, 229, 0)']} style={styles.splashcontainer}>
                {fontsLoaded &&
                <>
                    <Image
                        style={styles.splashImage}
                        source={require('../assets/battletasklogo.png')}
                        resizeMode="contain"
                    />
                    <Text style={[styles.splashTitle, {fontFamily: 'Ubuntu-Light'}]}>BattleTask</Text>
                    <Text style={[styles.splashSubtitle, {fontFamily: 'Ubuntu-Light'}]}>Combat ton quotidien</Text>
                    <TouchableOpacity style={styles.splashButton} onPress={()=>dispatch(openScreen({screen: 'auth'}))}>
                        <AntDesign name="rightcircle" size={40} color={colors.black} />
                    </TouchableOpacity>
                </>
                }
        </LinearGradient>
    )
}

export default Splash

const styles = StyleSheet.create({
    splashcontainer: {
        flex: 1,
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashImage: {
        width: 100,
    },
    splashTitle: {
        fontSize: 40,
        color: colors.black,
    },
    splashSubtitle: {
        marginTop: 5,
        fontSize: 20,
        opacity: 0.7,
        color: colors.black,
    },
    splashButton: {
        position: 'absolute',
        bottom: 50,
        width: 100,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
