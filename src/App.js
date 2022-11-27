import React from 'react';
import {SafeAreaView, Text, View, Platform} from 'react-native';
import Styles from './Styles';

function App() {
  return (
    <SafeAreaView>
      <View style={Styles.content}>
        <Text style={Styles.title}>PROJECT #43</Text>
        <Text style={Styles.subtitle}>{`Running on ${Platform.OS}.`}</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
