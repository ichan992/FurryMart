import React from "react";
import { Pressable, Text, View } from "react-native";
import ProductDescriptionHeader from "../../global/ProductDescriptionHeader";
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function ProductQuantity({quantity,setQuantity}) {
  const IncrementQuantity = () =>{
    setQuantity((prev : number)=>prev+1)
  }
  const DecrementQuantity = () =>{
    quantity > 1 && setQuantity((prev : number)=>prev-1)
  }
  return (
    <View style={{ width: "30%" }}>
    <ProductDescriptionHeader title={'Quantity'}/>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 20,
        }}
      >
        <Pressable
          style={{ height: 50, justifyContent: "center"}}
          onPress={()=>DecrementQuantity()}
        >
            <Ionicons name="remove-circle-outline" size={26}/>
        </Pressable>
        <View>
          <Text style={{ fontSize: 16, color: "black" }}>{quantity}</Text>
        </View>
        <Pressable
          style={{ height: 50, justifyContent: "center"}}
          onPress={()=>IncrementQuantity()}
        >
           <Ionicons name="add-circle-outline" size={26}/>
        </Pressable>
      </View>
    </View>
  );
}
