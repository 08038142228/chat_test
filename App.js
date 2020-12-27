import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import Appbar from './components/Appbar';
import Memodetailscreens from './screens/Memodetailscreens';

// You can import from local files
import AssetExample from './components/AssetExample';
//import BodyText from './elements/BodyText';

export default function App() {
// render() {
    return (
      <View style={styles.container}>        
        <Appbar />      
        <Memodetailscreens />
      </View>
      
      
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 78,
  },
});