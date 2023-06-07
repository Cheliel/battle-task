import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
import { getCurrentScreen } from './features/appSlice';
import Splash from './screens/Splash';
import Auth from './screens/Auth';
import Home from './screens/Home';
import Todolist from './screens/Todolist';
import Note from './screens/Notes';
import AddCollection from "./screens/AddCollection"
import AddToDoList from "./screens/AddToDoList"
import AddNote from "./screens/AddNote"
import Collection from "./screens/Collection"

const Internal = () => {
    const currentScreen = useSelector(getCurrentScreen);
    return (
        <View>
            <StatusBar style="auto" />
            {currentScreen==='splash' &&
                <Splash/>
            }
            {currentScreen==='auth' &&
                <Auth/>
            }
            {currentScreen==='home' &&
                <Home/>
            }
           {currentScreen==='todolist' &&
                <Todolist/>
            }
            {currentScreen==='note' &&
                <Note/>
            }
            {currentScreen==='addcollection' &&
                <AddCollection/>
            }
            {currentScreen==='addtodolist' &&
                <AddToDoList/>
            }
            {currentScreen==='addnote' &&
                <AddNote/>
            }
            {currentScreen==='collection' &&
                <Collection/>
            }
        </View>
    )
}

export default Internal

const styles = StyleSheet.create({})
