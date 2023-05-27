import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons/faClock';

const SubItemAcordion = ({ item  }) => {

  return (
    <View style={{height: 80, width: '100%', backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 4}}>
      <View style={{flex: 1, alignItems: 'center' , flexDirection: 'row', marginTop: 26}}>
        {item.difficulte === 1 && (
                    <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#1bc202', marginLeft: 8}}></View>
        )}
        {item.difficulte === 2 && (
                    <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f2c935', marginLeft: 8}}></View>
        )}
        {item.difficulte === 3 && (
                    <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f18041', marginLeft: 8}}></View>
        )}
        {item.difficulte === 4 && (
                    <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f14249', marginLeft: 8}}></View>
        )}
        <Text style={{fontWeight: 'bold', marginLeft: 8}}>{item.title}</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center' , flexDirection: 'row',justifyContent: 'center'}}>
        <View style={{flex: 0.6,flexDirection: 'column'}}>
          <Text style={{color: '#1da8b7', fontWeight: 'bold', textAlign: 'right'}}>{item.exp}exp</Text>
        </View>
        <View style={{flex: 0.4,flexDirection: 'column'}}>
        <View style={{flex: 1, height: '100%', width: '100%', justifyContent: 'start', flexDirection: 'row-reverse'}}>
            <FontAwesomeIcon style={{marginRight: 8, marginTop: -16}} icon={faClock} size={20}/>
        </View>
        <Text style={{textAlign: 'right', fontWeight: 'bold', fontSize: 12, marginRight: 8, marginBottom: 4}}>{item.time} Heure(s)</Text>
        </View>
      </View>
    </View>
  );
};


export default SubItemAcordion;