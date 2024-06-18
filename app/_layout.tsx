import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

interface SquareProps {
  color: string;
  label: string;
}

const Square: React.FC<SquareProps> = ({ color, label }) => (
  <View style={[styles.square, { backgroundColor: color }]}>
    <Text style={styles.squareLabel}>{label}</Text>
  </View>
);

const App: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.horizontalContainer}>
      <Square color="red" label="Square 1" />
      <Square color="green" label="Square 2" />
      <Square color="blue" label="Square 3" />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
