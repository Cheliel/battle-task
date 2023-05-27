import React from 'react';
import SubItemAcordion from './subItemAcordion';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
const AccordionItem = ({ title, exp, time, onPress, expanded, subitem,taches }) => {

  return (
    <View>
      <TouchableOpacity onPress={onPress}>
          <View style={{backgroundColor: 'white', width: '100%', borderRadius: 10, marginBottom: 20, flex: 1, flexDirection: 'column', padding: 4}}>
            <View style={{flex: 1, flexDirection: 'row',  marginBottom: 16}}>
                  <View style={{flex: 1.2}}>
                    <Text style={{fontWeight:'bold', margin: 5}}>{title}</Text>
                    <Text style={{fontWeight:'bold', marginLeft: 5, fontSize: 12}}>{time} Heure(s)</Text>
                    <Text style={{fontWeight:'bold', marginLeft: 5, fontSize: 14, marginTop: 14, color: '#07a0b1'}}>{exp}exp</Text>
                </View>
                <View>
                  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                  <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#1bc202'}}></View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{taches.facile}</Text>
                  <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f2c935'}}></View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{taches.facileplusdur}</Text>
                  <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f18041'}}></View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{taches.moyen}</Text>
                  <View style={{height: 16, width: 16, borderRadius: 20, backgroundColor: '#f14249'}}></View>
                  <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 5, marginLeft: 5}}>{taches.difficil}</Text>
                </View>
              </View>
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row'}}>
                <Text style={{marginTop: 8, marginLeft: 16}}>{expanded ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} size={26}/>}</Text>
              </View>
            </View>
            {expanded && (
              <View>
               {subitem.map((item) => (
                  <SubItemAcordion item={item} />
                  ))}
              </View>
            )}
          </View>
        </TouchableOpacity>    
    </View>
  );
};

export default AccordionItem;