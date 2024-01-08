import React, { useContext } from "react";
import { FlatList, Image,  StyleSheet, View } from "react-native";
import {  Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { CartContext } from "../../providers/CartProvider";
import CartQuantity from "./CartQuantity";
import { CartFooter } from "./CartFooter";
import EmptyCart from "./EmptyCart";
import CartItems from "./CartItems";
import { StackNavigationProp, } from "@react-navigation/stack";
import { RootStackParam } from "../../Navigation/Home/HomeStack";
import { useNavigation } from "@react-navigation/native";

export default function CartScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();
  
  const cartProvider = useContext(CartContext);
  const handleGetTotal = () => {
    return cartProvider.cartState.reduce((acc, current) => {
      const { price, qty } = current;
      return acc + price * qty;
    }, 0);
  };

if(cartProvider.cartState.length >=1){
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "80%",marginHorizontal:10 }}>
        <FlatList
          data={cartProvider.cartState}
          decelerationRate={"fast"}
          renderItem={({ item, index }) => <CartItems item={item} />}
        />
      </View>
      <CartFooter total={handleGetTotal()} />
    </SafeAreaView>
  );
}
return <EmptyCart />

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
