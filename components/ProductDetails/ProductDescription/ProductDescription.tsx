import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import ProductDescriptionHeader from '../../global/ProductDescriptionHeader';

export default function ProductDescription({ description } :{ description : string}) {
  return (
    <View>
        <View style={{gap:5}}>
            <ProductDescriptionHeader title={'Description'}/>
          <Text style={styles.description}>
            {description}
          </Text>
        </View>
    </View>
    
  )
}
const styles = StyleSheet.create({

  productDescription :{
    fontSize:18,
    fontWeight:'600'
  },
  description: {
    fontSize:14,
    textAlign:'justify',
    color:'black',
    width:Dimensions.get('window').width - 44,
  }
})
