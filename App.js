import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.item,styles.item1,{flexGrow:6}]}></Text>
      <Text style={[styles.item,styles.item2,{flexGrow:0}]}></Text>
      <Text style={[styles.item,styles.item3,{flexGrow:0}]}></Text>
      <Text style={[styles.item,styles.item3,{flexGrow:0}]}></Text>
      <Text style={[styles.item,styles.box1,{flexGrow:6}]}>FLEXBOX</Text>
      <Text style={[styles.item,styles.item4,{flexGrow:0}]}></Text>
     
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    
    flexDirection:'row',
    flexWrap: 'wrap',
    backgroundColor: 'rgb(69,63,63)',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  item:{
    
    height: 100,
    width: 100,
    margin:5,
    lineHeight:90,
    fontSize: 20,
    textAlign:'center',
  },
  item1:{
    backgroundColor: 'rgb(126,1,255)',
  },
  item2:{
    width:75,
    backgroundColor: 'rgb(69,157,255)',
  
  },
  box1:{
    backgroundColor: 'rgb(69,157,255)',
  
  },
  item3:{
    width:75,
    backgroundColor: 'rgb(170,0,229)',
  },
  item4:{
    width:75,
    backgroundColor: 'rgb(152,182,255)',
    
  
  },
});
