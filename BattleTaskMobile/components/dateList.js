import React, { useState, useEffect  } from 'react';
import { ScrollView } from 'react-native';
import DateItem from './date';

const DateList = ({ items, dateDeBase }) => {
  const [activeIndex, setActiveIndex] = useState(null);
   
  useEffect(() => {
    if (activeIndex === null) {
      setActiveIndex(3);
    }
  }, [activeIndex]);

  return (
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginTop: 8, marginLeft: 4}} >
      {items.map((item, index) => (
        <DateItem
          key={index}
          date={item.date}
          day={item.day}
          onPress={() => {
            if (index === activeIndex) {
              setActiveIndex(null);
            } else {
              setActiveIndex(index);
            }
          }}
          expanded={index === activeIndex}
        />
      ))}
    </ScrollView>
  );
};


export default DateList;