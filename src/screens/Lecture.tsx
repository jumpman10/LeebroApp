import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AnimatedTyping from '../components/AnimatedTyping';

const Lecture = ({navigation, route}) => {
  const [selectedTime, setSelectedTime] = useState(0);
  return (
    <View style={styles.container}>
      <AnimatedTyping time={route.params.time} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent:'center'
  },
  button: {
    height: 60,
    width: '60%',
    borderWidth: 3,
    borderColor: '#00367D',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textBtn: {
    fontSize: 30,
    fontWeight: '300',
    color: '#00367D',
    fontStyle: 'italic',
  },
  img: {
    width: '90%',
    height: 300,
    marginTop: 100,
  },
});

export default Lecture;
