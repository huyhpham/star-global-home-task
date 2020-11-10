import React, { useRef } from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MovingScreens = () => {
    const ballAnimatedValue = useRef(new Animated.Value(0)).current;
  
    const moveBall = () => {
      Animated.timing(ballAnimatedValue, {
        toValue: {x: 250, y: 350},
        duration: 500,
        useNativeDriver: true,
      }).start();
    };
  
    const xVal = ballAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 250],
    });
  
    const yVal = ballAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 350],
    });
  
    const animStyle = {
      transform: [
        {
          translateY: yVal,
          translateX: xVal,
        },
      ],
    };
  
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={moveBall}>
          <Animated.View style={[styles.ball, animStyle]}>
            <Text style={styles.text}>+</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    ball: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 32
    }
});

export default MovingScreens;