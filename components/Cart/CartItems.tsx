import React, { useContext } from 'react'
import { CartContext } from '../../providers/CartProvider';
import { Image, StyleSheet, Text, View } from 'react-native';
import CartQuantity from './CartQuantity';
import CartItemsInterface from '../../global.types'
interface CartItemsProps{
  item : CartItemsInterface
}
export default function CartItems({ item } : CartItemsProps) {
    const cartProvider = useContext(CartContext);
    const handleQuantityChange = (qty: number) => {
        if (qty != 0) {
          cartProvider.cartDispatch({
            type: "UPDATE_CART",
            item: item,
            qty: qty,
          });
        } else {
          cartProvider.cartDispatch({
            type: "REMOVE_FROM_CART",
            item: item,
          });
        }
      };
      
      return (
        <View style={styles.cartItemContainer}>
          <View style={styles.cartItemThumbnailContainer}>
              <Image source={item.thumbnail} style={styles.itemImage}/>
          </View>
          <View style={styles.cartItemDescriptionContainer}>
            <View>
              <Text numberOfLines={2} style={styles.productTitle}>
                {item.product_name}
              </Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
              <Text style={styles.priceText}>₱3,500</Text>
            <CartQuantity
                handleQuantityChange={handleQuantityChange}
                quantity={item.qty}
            />
            </View>
          </View>
        </View>
      );
    
}
const styles = StyleSheet.create({
  itemImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4,
  },
  productTitle: {
    fontSize: 14,
    color: "gray",
    fontWeight: "600",
  },
  priceText: {
    fontSize: 24,
    color:"orange",
    fontWeight: "bold",
  },
  cartItemDescriptionContainer: {
    width: "70%",
    height: "100%",
    padding:5,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  cartItemThumbnailContainer: {
    width: "30%",
    height:'100%',
    padding:10,
    overflow:'hidden'
  },
  cartItemContainer: {
    height:120,
    width:'90%',
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
