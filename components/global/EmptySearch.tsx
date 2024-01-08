import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp, } from "@react-navigation/stack";
import { RootStackParam } from "../../Navigation/Home/HomeStack";

export default function EmptySearch() {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();
  
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor:'white'
      }}
    >
      <View>
        <Image source={require('../../assets/empty.png')} style={{width:300, height:300}} />
      </View>
      <View style={{ alignItems: "center", width: "60%", gap: 20 }}>
        <View style={{gap:10}}>
        <Text
          style={{
            fontSize: 26,
            color: "orange",
            fontWeight: "bold",
            textAlign: "justify",
          }}
        >
          No Results Found
        </Text>
        <Text style={{ textAlign: "center", fontSize: 14, color:"black", opacity: 0.5 }}>
          Sorry there are no results for this search
        </Text>
        </View>
      
        <Button onPress={()=>navigation.goBack()} labelStyle={{fontSize:16}} style={{width:'95%',borderRadius:5,backgroundColor:'orange',}} mode='contained'>GO BACK</Button>
      </View>
    </SafeAreaView>
  );
}
