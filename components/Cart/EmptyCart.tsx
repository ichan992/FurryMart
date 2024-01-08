import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from "react-native-paper";
import { StackNavigationProp, } from "@react-navigation/stack";
import { RootStackParam } from "../../Navigation/Home/HomeStack";
import { useNavigation } from "@react-navigation/native";

export default function EmptyCart() {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();
  
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <View>
        <Ionicons name="cart" size={200} color={'orange'}/>
      </View>
      <View style={{ alignItems: "center", width: "60%", gap: 20 }}>
        <View>
        <Text
          style={{
            fontSize: 26,
            color: "orange",
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          Your Cart is Empty
        </Text>
        <Text style={{ textAlign: "center", fontSize: 14, color:"black", opacity: 0.5 }}>
          Looks like you haven't added anything to your cart yet
        </Text>
        </View>
      
        <Button onPress={()=>navigation.navigate('Home')} labelStyle={{fontSize:16}} style={{width:'95%',borderRadius:5,backgroundColor:'orange',}} mode='contained'>Shop now</Button>
      </View>
    </SafeAreaView>
  );
}
