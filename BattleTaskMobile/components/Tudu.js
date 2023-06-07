import React, { useState } from 'react'
import { Dimensions, Pressable, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { colors } from '../Colors'
import { useFonts } from 'expo-font';
import EditTudu from './EditTudu';
import { delCollection, delNote } from '../actions/AppActions';
import { useDispatch } from 'react-redux';
import { openScreen } from '../features/appSlice'
import MapView from 'react-native-maps';

const Tudu = ({tuduName, completeStatus, tuduId, refreshAction, action, isNote, facile, moyen, dificile, tresdificile, isCollection}) => {
    const dispatch = useDispatch();
    const [viewEditModal, setViewEditModal] = useState(false)
    let [fontsLoaded] = useFonts({
        'Ubuntu-Light' : require('../assets/fonts/Ubuntu-Light.ttf'),
        'Ubuntu-Medium' : require('../assets/fonts/Ubuntu-Medium.ttf'),
        'Ubuntu-Regular' : require('../assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-LightItalic' : require('../assets/fonts/Ubuntu-LightItalic.ttf'),
    });
    return (
    <View>
          <View style={{backgroundColor: 'white', height: '100%', width: '100%', borderRadius: 10, marginBottom: 20, flex: 1, flexDirection: 'row', padding: 4}}>
            <View style={{flex: 1, flexDirection: 'row',  marginBottom: 16}}>
            {isNote == false &&
            <View style={{flex: 1.2}}>
                <Text style={{fontWeight:'bold', margin: 5}}>{tuduName}</Text>
                {isCollection == false && 
                    <Text style={{fontWeight:'bold', margin: 5, fontSize: 12}}>Collection : {completeStatus}</Text>
                }
                <Text style={{fontWeight:'bold', marginLeft: 5, fontSize: 12}}>1 Heure(s)</Text>
                <Text style={{fontWeight:'bold', marginLeft: 5, fontSize: 14, marginTop: 14, color: '#07a0b1'}}>0exp</Text>
            </View>
            } 
            {isNote &&
            <View style={{flex: 1}}>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 12}}>Difficulté : <View style={{height: 16, width: 16,top: 10, borderRadius: 20, backgroundColor: '#1bc202'}}></View></Text>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 10}}>Créer le : 30/05/2023</Text>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 10}}>Echéance le : 31/05/2023</Text>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 10}}>Durée 0.5h</Text>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 12}}>Ta taches :</Text>
                <Text style={{margin: 10}}>{tuduName}</Text>
                <Text style={{fontWeight:'bold', margin: 10, fontSize: 12}}>Lieu : Strasbourg</Text>
                <MapView
                                  style={{width: '100%', height: 150}}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                />
            </View>
            } 
                <View>
                    {isNote == false &&
                    <View style={{flex: 1}}>
                        <View style={{flex: 1,top: 36, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                            <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#1bc202'}}></View>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{facile}</Text>
                            <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f2c935'}}></View>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{moyen}</Text>
                            <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f18041'}}></View>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{dificile}</Text>
                            <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f14249'}}></View>
                            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{tresdificile}</Text>
                        </View>
                        <TouchableOpacity onPress={() => {
                            if(isCollection){
                                dispatch(delCollection(tuduId))
                            }
                            if(isNote){
                                dispatch(delNote(tuduId))
                            }
                            dispatch(openScreen({screen: "collection"}))
                        }}>
                        <View style={{height: 40}}></View>
                            <Image
                            source={require('../assets/delete.png')}
                            style={{height: 32, width: 65, top: 15}}
                            resizeMode="contain"
                        />
                        </TouchableOpacity>
                    </View>
                    }
            </View>
            {!isNote &&             
                        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <TouchableOpacity onPress={() => dispatch(openScreen({screen: action, id: tuduId}))}>
                        <Image
                                    source={require('../assets/detail.png')}
                                    style={{height: 32, width: 65}}
                                    resizeMode="contain"
                                />
                        </TouchableOpacity>
                    </View>
            }
              </View>
          </View>
    </View>
    )
}

export default Tudu

const styles = StyleSheet.create({
    tuducontainer: {
        backgroundColor: colors.clearWhite,
        width: Dimensions.get('window').width*0.8,
        borderColor: colors.lightBlue,
        borderRadius: 20,
        borderWidth: 1,
        overflow: 'hidden',
        marginVertical: 10
    },
    tuduoption: {
        flexDirection: 'row',
    },
    tudutask: {
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    tudutasktext: {
        fontSize: 18
    },
    tuduoptionbtn: {
        flex: 1,
        backgroundColor: colors.lightBlue,
        paddingVertical: 15
    },
    tuduoptiontext: {
        color: colors.clearWhite,
        textAlign: 'center',
        fontSize: 18
    }
})
