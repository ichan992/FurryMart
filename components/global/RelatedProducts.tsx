import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import ProductDescriptionHeader from './ProductDescriptionHeader'
import { ProductList } from '../../Products';
import ProductCard from '../ProductCard/ProductCard';

export default function RelatedProducts() {

  return (
    <View style={{height:'50%',width:'100%',gap:5}}>
        <ProductDescriptionHeader title='You may also like'/>
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 5 }}
          data={ProductList.slice(0,3)} // Changed from slice(0,4) to slice(0,3)
          horizontal={true}
          keyExtractor={(item)=>item.product_name}
          renderItem={({ item }) => (
            <View style={{width:250}}>
                <ProductCard data={item} />
            </View>
              
     
          )}
        />
    </View>
  )
}