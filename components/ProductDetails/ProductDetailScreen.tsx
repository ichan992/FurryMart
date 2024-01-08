import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ProductThumbnail from "./ProductThumbnail/ProductThumbnail";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductDescription from "./ProductDescription/ProductDescription";
import ProductDescFooter from "./ProductDescriptionFooter/ProductDescFooter";
import ProductHeader from "./ProductHeader/ProductHeader";
import { CartContext } from "../../providers/CartProvider";
import { Snackbar } from "react-native-paper";
import RelatedProducts from "../global/RelatedProducts";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParam } from "../../Navigation/Home/HomeStack";

type Props = NativeStackScreenProps<RootStackParam,'ProductDetailScreen'>;

export default function ProductDetailScreen({ route } : Props) {
  const { product } = route.params

  const cartProvider = useContext(CartContext);
  const [quantity,setQuantity] = useState(1);
  const [showSnackbar,setShowSnackBar] = useState(false)

  const IncrementQuantity = () =>{
    setQuantity((prev : number)=>prev+1)
  }
  const DecrementQuantity = () =>{
    quantity > 1 && setQuantity((prev : number)=>prev-1)
  }
  const getTotal = () =>{
    return product.price  * quantity
  }
  const AddtoCart= ()=>{
      let item = {
        product_name : product.product_name,
        qty: quantity,
        thumbnail : product.thumbnail,
        price: product.price
      }
      setShowSnackBar(true)
      cartProvider.cartDispatch({type:'ADD_TO_CART',item : item})
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProductThumbnail images={product.images} />
        <View style={styles.cardDescriptionContainer}>
          <ProductHeader purchase_price={product.price}  product_name = {product.product_name} />
          <ProductDescription description ={product.description} />
          <RelatedProducts/>
        </View>
      </ScrollView>
      <ProductDescFooter getTotal={getTotal}  quantity={quantity} IncrementQuantity={IncrementQuantity} DecrementQuantity={DecrementQuantity} AddtoCart ={AddtoCart}/>
      <Snackbar
        visible={showSnackbar}
        onDismiss={()=>{setShowSnackBar(false)}}
        duration={3000}
        style={{backgroundColor:'orange'}}

        action={{
          label: 'Hide',
          textColor:'white',
          onPress: () => {
            setShowSnackBar(false)
          },
        }}>
       Successfully added to cart
      </Snackbar>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  cardDescriptionContainer: {
    gap:10,
    marginTop:10,
    height: "100%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 25,
    elevation: 20,
    shadowColor: '#52006A',
    paddingBottom:90
  },
});
