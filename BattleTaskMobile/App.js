import React, { useState } from 'react';
import Accordion from './components/acordionList';
import DateList from './components/dateList';
import { ImageBackground, ScrollView } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons/faMedal';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { faTrophy } from '@fortawesome/free-solid-svg-icons/faTrophy';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';


const items = [
  { title: 'Voiture', exp: '840', time: '1', taches: {facile:1, facileplusdur:1, moyen:0, difficil:0}, subitem: [{title: 'Changer ampoule', exp:'420', time:'0.3', difficulte:1},{title: 'Changer mes pneux', exp:'420', time:'1',difficulte:2}] },
  { title: 'Moto', exp: '420', time: '1',taches: {facile:1, facileplusdur:0, moyen:0, difficil:0},subitem: [{title: 'Lubrifier la chaine', exp:'420', time:'1',difficulte:1}] },
  { title: 'Maison', exp: '420', time: '1',taches: {facile:1, facileplusdur:0, moyen:0, difficil:0},subitem: [{title: 'Passer aspirateur', exp:'420', time:'1',difficulte:1}] },
];

const itemsDate = [
];

export default function App() {
  const [count, setCount] = useState(0);
  const [expanded, setExpanded] = useState(false);

  var annee = "";
  var moisCourrant = "";

  const handlePress = () => {
    setExpanded(!expanded);
  };

  const handleSet = (number) => {
    setCount(number);
  };

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
    <LinearGradient start={{ x: -0.2, y: 0 }} end={{ x: 1, y: 1 }} colors={['rgba(241, 65, 74, 0.3)', 'rgba(125, 88, 137, 0.3)', 'rgba(6, 160, 129, 0.3)', 'rgba(220, 223, 229, 0)']} style={styles.container}>
    <View style={{flex: 0.8}} />
    <View style={{flex: 1.4}}>
      <View style={{height: 50, width: 50, margin: 16}}>
        <ImageBackground imageStyle={{ borderRadius: 40}} source={{uri: 'https://creapills.com/wp-content/uploads/2021/12/londres-museum-trex-pull-noel-1920x1080.jpg'}} style={{resizeMode:"cover", justifyContent: 'center', width: '100%', height: '100%'}}>
        </ImageBackground>
      </View>
      <Text style={{marginLeft: 74, marginTop: -45, fontWeight: 'bold', fontSize: 14}}>TRex#3846</Text>
    </View>
    <View style={{flex: 2, alignItems: 'center'}}>
    <FontAwesomeIcon style={{marginBottom: -15}} icon={faMedal} size={26} color='#ebe700'/>
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
        <Accordion items={items} />
      </ScrollView>
      </View>
    </View>
    <View style={{flex: 1.4, backgroundColor: '#ffffff', flexDirection: 'row',alignItems: 'center', justifyContent: 'center', gap: 40}}>
    <FontAwesomeIcon icon={faHouse} size={24} color='#06a0b1' style={{left: 8, bottom: 4}}/>
    <FontAwesomeIcon icon={faTrophy} size={24} color='#abadb2' style={{left: 16, bottom: 4}}/>
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 90, width: 90, borderRadius: 50, bottom: 30, backgroundColor: '#dcdfe5',  alignItems: 'center', justifyContent: 'center'}}>
          <View style={{height: 70, width: 70, borderRadius: 50, backgroundColor: '#06a0b1',alignItems: 'center', justifyContent: 'center'}}>
            <FontAwesomeIcon icon={faPlus} size={26} color='#ffff' />
          </View>
          </View>
    </View>
    <FontAwesomeIcon icon={faUser} color='#abadb2' size={24} style={{right: 16, bottom: 4}}/>
    <FontAwesomeIcon icon={faGear} color='#abadb2' size={24} style={{right: 8, bottom: 4}}/>
    </View>
  </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    zIndex: 4,
    borderRadius: 40,
    height: 50,
    width: 50,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  textCalendar: {
    zIndex: 4,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textDay:{
    marginTop: 10,
    zIndex: 4,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerCalendarDay:{
    zIndex: 4,
    height: 100,
    width: 50,
    margin: 5
  },
  dateDuJour: {
    marginLeft: -5,
    marginTop: -5,
    zIndex: 3,
    height: 105,
    width: 60,
    backgroundColor: '#f1414a',
    borderRadius: 40,
    position: 'absolute'
  }
});
