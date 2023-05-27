import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const DateItem = ({ date, day,onPress, expanded  }) => {

  return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.containerCalendarDay}>
                <View style={styles.circle}>
                    <Text style={styles.textCalendar}>{date}</Text>
                </View>
                <Text style={styles.textDay}>{day}</Text>
                {expanded && (
                       <View style={styles.dateDuJour}></View>
                )}
            </View> 
        </TouchableOpacity>
  );
};

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

export default DateItem;