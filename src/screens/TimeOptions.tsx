import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const TimeOptions = ({navigation}) => {
  const [selectedTime, setSelectedTime] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Selecciona el tiempo en el que leeras el texto de 100 palabras
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lecture', {time: 1000, speed:80000})}>
        <Text style={styles.textBtn}>1:20 minutos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lecture', {time: 800})}>
        <Text style={styles.textBtn}>1:00 minutos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lecture', {time: 500})}>
        <Text style={styles.textBtn}>0:40 minutos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lecture', {time: 1000, speed: 20000})}>
        <Text style={styles.textBtn}>0:20 minutos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    fontSize: 25,
    fontWeight: '100',
    color: '#00367D',
    fontStyle: 'italic',
  },
  img: {
    width: '90%',
    height: 300,
    marginTop: 100,
  },
});

export default TimeOptions;
