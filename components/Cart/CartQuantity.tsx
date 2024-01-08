import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface CartQuantityProps {
    quantity : number,
    handleQuantityChange : (quantity : number) => void
}
export default function CartQuantity({quantity, handleQuantityChange}: CartQuantityProps) {
  const DecrementQuantity = () => {
    handleQuantityChange(quantity - 1);
  };
  const IncrementQuantity = () => {
    handleQuantityChange(quantity + 1);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Pressable
        style={{justifyContent: 'center'}}
        onPress={() => DecrementQuantity()}>
        <View style={{padding: 10}}>
          <Ionicons name="remove-outline" size={26} color="black" />
        </View>
      </Pressable>
      <View style={{width: '15%'}}>
        <Text style={{textAlign: 'center', fontSize: 16, color: 'black'}}>
          {quantity}
        </Text>
      </View>
      <Pressable
        style={{justifyContent: 'center'}}
        onPress={() => IncrementQuantity()}>
        <View style={{padding: 10}}>
          <Ionicons name="add-outline" size={26} color="black" />
        </View>
      </Pressable>
    </View>
  );
}
