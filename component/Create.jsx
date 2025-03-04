import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { Pressable, TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const Create = ({ data, setdata }) => {
  const [itemname, setitemname] = useState("");
  const [stockamount, setstock] = useState("");
  const [isedit,setedit]=useState(false);
  const[editid,seteditid]=useState(null)
  const handleadd = () => {  // for adding item
    const newitem = {
      id: Date.now(),
      name: itemname,
      stock: stockamount,
    };
    setdata([...data, newitem]);
    setitemname(''),
    setstock('')
  };

  const deleteitem=(id)=>{  // for deleting item
     
    setdata(data.filter((item)=>item.id!==id))
  }

  const itemedit=(item)=>{ //for editing item
     setedit(true) 
     setitemname(item.name)
     seteditid(item.id)
  }
  const update=()=>{  // updating the value
     
    setdata(data.map((item)=>(
      item.id===editid?{...item,name:itemname,stock:stockamount} :item
    )

    ))
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item name..."
        style={styles.input}
        value={itemname}
        onChangeText={setitemname}
      ></TextInput>
      <TextInput
        placeholder="Enter  stock amount..."
        style={styles.input}
        value={stockamount}
        onChangeText={setstock}
      ></TextInput>
      <Pressable style={styles.button} onPress={()=>isedit?update():handleadd()}>
        <Text style={styles.buttontext}>{isedit?"Edit item in the stock":"Add item in the stock"}</Text>
      </Pressable>
      <View>
        <View style={styles.headingcontainer}>
          <Text style={styles.headingtext}>All Items in the stock</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemcontainer,
                { backgroundColor: item.stock < 20 ? "#C1440E" : "#444444" },
              ]}
            >
              <Text style={styles.itemtext}>{item.name}</Text>
             
              <View style={{ flexDirection: "row", gap: 20,marginLeft:127 }}>
                <Text style={styles.itemtext}>{item.stock}</Text>
                <Pressable onPress={()=>deleteitem(item.id)}>
                <Text style={styles.itemtext}>Delete</Text>
                </Pressable>
                <Pressable onPress={()=>itemedit(item)}>
                <Text style={styles.itemtext}>Edit</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  container: {
    padding: "4%",
    gap: 10,
    flex:1,
  },
  input: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 5,
    color: "white",
    fontFamily: "Poppins",
  },
  button: {
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#001F3F",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 5,
    color: "white",
    fontFamily: "Poppins",
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  headingcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    marginTop: 10,
    paddingVertical: 10,
  },
  headingtext: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#F5F5F5",
    textAlign: "center",
  },
  itemcontainer: {
    flexDirection: "row",
    //justifyContent:"space-between",
    paddingHorizontal: 5,
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 5,
    flex:1
  },
  itemtext: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
});
