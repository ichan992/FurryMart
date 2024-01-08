import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function ProductDescriptionHeader({title} : { title :string}) {
  return (
    <Text style={styles.productDescription}>{title}</Text>
  )
}
const styles = StyleSheet.create({
    productDescription :{
      fontSize:16,
      fontWeight:'600',
      color:'gray'
    },

  })
  