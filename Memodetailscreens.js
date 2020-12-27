import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Circlebutton from '../elements/Circlebutton';

class Memodetailscreens extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <View>
          <View style={styles.memoHeader}>
            <View>
              <Text style={styles.memoHeaderTitle}>講座のアイデア</Text>
              <Text style={styles.memoHeaderDate}>2020/12/25</Text>
            </View>
          </View>
        </View>

        <View style={styles.memoContent}>
          <Text>
            講座のアイデアです。
          </Text>
        </View>

        <Circlebutton styles={styles.editButton}>+</Circlebutton>
      </View>
    );
  } 
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
 },
 memoHeader: {
   height: 100,
   backgroundColor: '#17313c',
   jsutifyContent: 'center',
   padding: 10,
 },
 memoHeaderTitle:{
 fontSize: 20,
 fontWeight: 'bold',
 color: '#fff',
 maraginBottom: 4,
},
memoHeaderDate:{
  fontSize:12,
  color: '#fff',
},
 memoContent: {
  paddingTop: 30,
  passingLeft: 20,
  paddingRight:20,
  paddingBottom: 20,
  flex: 1,  
},
editButton:{
  top: 120,
},
});
export default Memodetailscreens;