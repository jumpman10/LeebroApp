import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AnimatedTypewriterText = ({sentences, delay, speed, style}) => {
  const [animatedText, setAnimatedText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (sentences.length !== currentSentenceIndex) {
      startTypingAnimation();
    } else {
      setCurrentSentenceIndex(0);
    }
  }, [currentSentenceIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prevState => !prevState);
    }, 500);
    return () => {
      clearInterval(cursorInterval);
    };
  }, []);

  const startTypingAnimation = () => {
    const currentSentence = sentences[currentSentenceIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      setAnimatedText(prevState => prevState + currentSentence[index]);
      index++;

      if (index === currentSentence.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSentenceIndex(prevState => prevState + 1);
          setAnimatedText('');
        }, delay);
      }
    }, speed);
  };

  return (
    <View style={style}>
      <Text style={styles.text}>{animatedText}</Text>
      {showCursor && <Text style={styles.cursor}>|</Text>}
    </View>
  );
};

const AnimatedTyping = ({time,speed}) => {
  return (
    <View style={styles.container}>
      <AnimatedTypewriterText
        sentences={[
          'Leer es una actividad fundamental para el desarrollo personal y profesional.A través de la lectura, adquirimos conocimientos, ampliamos nuestro vocabulario y mejoramos nuestras habilidades de comunicación.Además, leer nos permite viajar a diferentes mundos, conocer diversas culturas y perspectivas, y estimular nuestra imaginación.También es una excelente manera de reducir el estrés y mejorar la concentración.La lectura fomenta el pensamiento crítico y nos ayuda a comprender y analizar la información de manera más efectiva.En resumen, leer no solo enriquece nuestra mente, sino que también nos convierte en personas más informadas y empáticas.Sigue así :)',
        ]}
        delay={time}
        speed={speed}
        style={styles.textContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  cursor: {
    fontSize: 18,
    marginBottom: 10,
    opacity: 0.6,
    position: 'absolute',
    right: -5,
  },
});

export default AnimatedTyping;
