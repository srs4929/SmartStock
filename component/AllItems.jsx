import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

const AllItems = ({data}) => {
  return (
    <View>
      <View style={styles.headingcontainer}>
        <Text style={styles.headingtext}>Items</Text>
        <Text style={styles.headingtext}>Quantity</Text>
      </View>
      <FlatList
      data={data}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <View style={[styles.itemcontainer,{backgroundColor:item.stock<20?"#C1440E":"#444444"}]}>
          <Text style={styles.itemtext}>{item.name}</Text>
          <Text style={styles.itemtext}>{item.stock}</Text>
        </View>
      )}
      />

    
    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({

  headingcontainer:
  {
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:5,
    marginTop:10,
    paddingVertical:10
  },
  headingtext:
  {
      fontSize:16,
      fontWeight:"bold",
      color:"white"
  },
  itemcontainer:
  {
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:5,
    marginTop:10,
    paddingVertical:10,
    borderRadius:5
  },
  itemtext:
  {
      fontSize:14,
      fontWeight:"bold",
      color:"white",
      marginLeft:5,
  }
})