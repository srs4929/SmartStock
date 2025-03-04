import { Text, View,Image,Button,StyleSheet} from "react-native";
import { FlatList, TextInput } from "react-native-gesture-handler";
import Home from "../component/Home"
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function Index() {
  
  return (
    
    <GestureHandlerRootView style={{ flex: 1 }}>
    
      <Home />
   
  </GestureHandlerRootView>
    
      
    
       
  );
}

