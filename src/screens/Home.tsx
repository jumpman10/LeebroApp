import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
function Home({navigation}): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/LEEBRO.png')} style={styles.img} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TimeOptions')}>
        <Text style={styles.textBtn}>Leer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  button: {
    height: 60,
    width: '50%',
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

export default Home;
