import React from 'react'
import { StyleSheet, View,Text } from 'react-native';
interface ProductRatingProps {
  rating : number,
  total : number
}
export default function ProductRatings({ rating, total } : ProductRatingProps) {
  return (
    <View style={styles.container}>
 
      <Text style={styles.rating}>{rating}</Text>
      <Text style={styles.totalReview}>{`(${total} reviews)`}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    gap:1,
    alignItems:'center'
  },
  rating:{
    fontSize:16
  },
  totalReview:{
    fontSize:12,
    color:'gray'
  }
})
