import React, { useState } from 'react';
import { View } from 'react-native';
import AccordionItem from './acordion';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <View>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          exp={item.exp}
          time={item.time}
          onPress={() => {
            if (index === activeIndex) {
              setActiveIndex(null);
            } else {
              setActiveIndex(index);
            }
          }}
          expanded={index === activeIndex}
          subitem={item.subitem}
          taches={item.taches}
        />
      ))}
    </View>
  );
};

export default Accordion;