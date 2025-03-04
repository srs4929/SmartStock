import { StyleSheet, Text, View,Button, Pressable } from 'react-native'
import React from 'react';
import {useState} from 'react'
import AllItems from "./AllItems"
import Create from "./Create"
import Lowstock from "./Lowstock"
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const Home = ({navigation}) => {

  const[view,setview]=useState(0)
  const [data,setdata]=useState([
    {id :1 ,name:"Wheat", stock:5,unit:"kg"},
    {id: 2,name:"Date",stock:20,unit:"kg"},
    {id: 3,name:"Fish",stock:12,unit:"kg"},
    {id: 4,name:"Pulse",stock:25,unit:"kg"},
    {id: 5,name:"Corn",stock:50,unit:"kg"},
  
  ])
   
  
  return (
    <GestureHandlerRootView>
    <View style={styles.container}>
      <Text style={styles.text}>DashBoard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button,view===0?{backgroundColor:"white"}:null]} onPress={()=>setview(0)}>
           <Text style={[styles.btnText,view===0?{color:"black"}:null]}>All Item</Text>
        </Pressable>
        <Pressable style={[styles.button,view===1?{backgroundColor:"white"}:null]} onPress={()=>setview(1)}>
           <Text style={[styles.btnText,view===1?{color:"black"}:null]}>Low Stock</Text>
        </Pressable>
        <Pressable style={[styles.button,view===2?{backgroundColor:"white"}:null]} onPress={()=>setview(2)}>
           <Text style={[styles.btnText,view===2?{color:"black"}:null]}>Create</Text>
        </Pressable>
      </View>
      {view ===0 && <AllItems data={data}/>}
      {view === 1 && <AllItems data={data.filter((item) => item.stock < 20)} />}
      {view ===2 && <Create data={data} setdata={setdata} />}
    </View>
    </GestureHandlerRootView>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    width:"100%",
    height:"100%",
    backgroundColor:"grey",
   
    padding:"4%"
  },
  text:{
    fontSize:24,
    color:"white",
    fontWeight:"bold",
    marginBottom:10,
    fontFamily:"Poppins"
    
  },
  buttonContainer:
  {
    flexDirection:"row",
    gap:10
  },
  button:{
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:50,
    borderWidth:1,
    borderColor:"white",
  },
  btnText:
  {
    color:"white",
    fontSize:14,
    fontWeight:600,
    fontFamily:"Poppins",
    

  }


})