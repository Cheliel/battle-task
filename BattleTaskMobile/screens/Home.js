import React, { useEffect, useState } from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View,ImageBackground,TouchableOpacity } from 'react-native'
import Header from '../components/Header'
import Constants from 'expo-constants'
import { colors } from '../Colors'
import Footer from '../components/Footer'
import Tudu from '../components/Tudu'
import { useDispatch, useSelector } from 'react-redux'
import { openScreen } from '../features/appSlice'
import { useFonts } from 'expo-font';
import { fakeData } from '../FakeData'
import NewTudu from '../components/NewTudu'
import { getCurrentUsername } from '../features/userSlice'
import { getNoteDays } from '../actions/AppActions'
import { LinearGradient } from 'expo-linear-gradient'
import DateList from '../components/dateList'

const itemsDate = [
];

const Home = () => {
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    const [count, setCount] = useState(0);
    const currentUsername = useSelector(getCurrentUsername);
    const dispatch = useDispatch();
    const [homeList, setHomeList] = useState([])
    const [viewEmpty, setViewEmpty] = useState(homeList.length===0)
    const [viewTuduModal, setViewTuduModal] = useState(false)
    const queryAllUsersTudus = ()=>{
        getNoteDays(
            currentUsername,
            (respdata)=>{setHomeList(respdata.map(tuduitem=>tuduitem))}
        );
    }

    useEffect(()=>{
        if(homeList.length>0){
            setViewEmpty(false);
        } else {
            setViewEmpty(true);
        };
    },[homeList])

    useEffect(()=>{
        queryAllUsersTudus();
    }, [])
    var annee = "";
    var moisCourrant = "";

    const GetDays = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        const numDays = new Date(year, month + 1, 0).getDate();
        
        annee = year;
        moisCourrant = date.toLocaleString('fr-Fr', { month: 'long' });
    
        moisCourrant = moisCourrant.charAt(0).toUpperCase() + moisCourrant.slice(1);
    
        for (let i = date.getDate() - 3; i <= numDays; i++) {
          const day = new Date(year, month, i);
          const dayOfWeek = day.toLocaleString('fr-Fr', { weekday: 'long' });
          itemsDate.push({ date: ((i > 9) ? i : "0" + i), day: dayOfWeek.toUpperCase().substring(0,3) });
        }
      };
      GetDays();
    return (
        <LinearGradient start={{ x: -0.2, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(241, 65, 74, 0.3)', 'rgba(125, 88, 137, 0.3)', 'rgba(6, 160, 129, 0.3)', 'rgba(220, 223, 229, 0)']} style={styles.homecontainer}>
            <View style={{flex: 0.8}} />
            <View style={{flex: 0.8}}>
            <View style={{height: 50, width: 50, margin: 16}}>
                <ImageBackground imageStyle={{ borderRadius: 40}} source={{uri: 'https://creapills.com/wp-content/uploads/2021/12/londres-museum-trex-pull-noel-1920x1080.jpg'}} style={{resizeMode:"cover", justifyContent: 'center', width: '100%', height: '100%'}}>
                </ImageBackground>
            </View>
            <Text style={{marginLeft: 74, marginTop: -45, fontWeight: 'bold', fontSize: 14}}>TRex#3846</Text>
            </View>
            <View style={{flex: 2, alignItems: 'center'}}>
            <View style={{height: 10, width: '60%', backgroundColor: '#8ac6d2', borderRadius: 10, marginTop: 24, marginBottom: 8}}>
            <Text style={{position: 'absolute', marginLeft: -30, marginTop: -5, fontSize: 18, fontWeight: 'bold'}}>1</Text>
            <View style={{height: '100%', width: '40%', backgroundColor: "#07a0b1", borderRadius: 10}}></View>
            <Text style={{position: 'absolute', fontSize: 18, fontWeight: 'bold', right: 0, marginTop: -5, marginRight: -30}}>2</Text>
            </View>
            <View>
            <Text style={{fontWeight: 'bold',fontSize: 14, color: "#02a0b1"}}>138exp</Text>
            </View>
            </View>
            <View style={{flex: 2.2, flexDirection: 'row'}}>
            <Text style={{position: 'absolute', marginTop:-25, marginLeft: 10, fontSize: 18, fontWeight: 'bold'}}>{moisCourrant} {annee}</Text>      
                <DateList items={itemsDate} />
            </View>
            <View style={{flex: 7, backgroundColor: '#dcdfe5', borderTopLeftRadius: 30, borderTopRightRadius: 30, alignItems: 'center', marginTop: 8}} >
            <View style={{flex: 0.12, flexDirection: 'row', columnGap:5, marginTop: 15}} >
                <TouchableOpacity onPress={() => handleSet(0)}>
                {count === 0 && (
                    <View style={{height: 25, width: 110, backgroundColor: '#0aa0b1', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Aujourd'hui</Text>
                    </View>
                )}
                {count !== 0 && (
                <View style={{height: 25, width: 110, backgroundColor: '#ffffff', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'black'}}>Aujourd'hui</Text>
                </View>
                )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleSet(1)}>
                {count === 1 && (
                    <View style={{height: 25, width: 110, backgroundColor: '#0aa0b1', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Semaine</Text>
                    </View>
                )}
                {count !== 1 && (
                <View style={{height: 25, width: 110, backgroundColor: '#ffffff', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'black'}}>Semaine</Text>
                </View>
                )}
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => handleSet(2)}>
                {count === 2 && (
                    <View style={{height: 25, width: 110, backgroundColor: '#0aa0b1', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Mois</Text>
                    </View>
                )}
                {count !== 2 && (
                <View style={{height: 25, width: 110, backgroundColor: '#ffffff', borderRadius: 40, flex: 0, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: 'black'}}>Mois</Text>
                </View>
                )}
                </TouchableOpacity>
            </View>
            {count === 0 && (
                <Text style={{fontWeight: 'bold'}}>Vos Combats d'aujourd'hui</Text>
            )}
            {count === 1 && (
                <Text style={{fontWeight: 'bold'}}>Vos Combats de la semaine</Text>
            )}
            {count === 2 && (
                <Text style={{fontWeight: 'bold'}}>Vos Combats du mois</Text>
            )}
            <View style={{flex: 1, height: '100%', width: '100%', alignItems: 'center'}}>
            <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', height: '100%', marginTop: 20, marginBottom: 40}}>
            {homeList.map(item=>(
                    <Tudu                  
                    key={item.key}
                    tuduName={item.texte}
                    completeStatus={item.completeStatus}
                    tuduId={item.key}
                    refreshAction={queryAllUsersTudus}
                    action="todolist"
                    isNote={true}
                    />
                ))}
            </ScrollView>
            </View>
            </View>
            <View style={{flex: 1.4, backgroundColor: '#ffffff', flexDirection: 'row',alignItems: 'center', justifyContent: 'center', gap: 40}}>
            <TouchableOpacity onPress={()=>dispatch(openScreen({screen: 'collection'}))}>
            <Image
                        source={require('../assets/collection.png')}
                        style={{height: 32, width: 65}}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>dispatch(openScreen({screen: 'todolist'}))}>
                                <Image
                        source={require('../assets/todolist.png')}
                        style={{ height: 52, width: 65}}
                        resizeMode="contain"
                    />
                    </TouchableOpacity>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 90, width: 90, borderRadius: 50, bottom: 30, backgroundColor: '#dcdfe5',  alignItems: 'center', justifyContent: 'center'}}>
                <View style={{height: 70, width: 70, borderRadius: 50, backgroundColor: '#06a0b1',alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity onPress={()=>dispatch(openScreen({screen: 'addcollection'}))}>
                <View style={{height: 70, width: 70, borderRadius: 50, backgroundColor: '#06a0b1',alignItems: 'center', justifyContent: 'center'}}>
                <Image
                        style={{height: 30, width: 30}}
                        source={require('../assets/add.png')}
                        resizeMode="contain"
                    />
                </View>
                </TouchableOpacity>             
                </View>
                </View>
            </View>
            <Image
                        source={require('../assets/collection.png')}
                        style={{height: 32, width: 65}}
                        resizeMode="contain"
                    />
                                <Image
                        source={require('../assets/collection.png')}
                        style={{height: 32, width: 65}}
                        resizeMode="contain"
                    />
            </View>
        </LinearGradient>
    )
}

export default Home

const styles = StyleSheet.create({
    homeEmptySubtitle:{
        color: colors.darkGray,
        fontSize: 30,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 15
    },
    homeEmptySubsubtitle:{
        color: colors.darkGray,
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
        marginTop: 10,
        opacity: 0.5
    },
    homecontainer: {
        height: Dimensions.get('window').height+Constants.statusBarHeight,
        flex: 1,
        width: Dimensions.get('screen').width,
    },
    homecontents: {
        paddingVertical: 20,
        paddingBottom: 200,
    },
    homeImage: {
        width: Dimensions.get('screen').width,
        height: 280
    }
})
