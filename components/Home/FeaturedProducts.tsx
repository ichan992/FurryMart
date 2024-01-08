import React from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import ProductCard from '../ProductCard/ProductCard';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParam } from '../../Navigation/Home/HomeStack';
import ProductInterface from '../../global.types';

interface FeaturedProductsProps {
  data: ProductInterface[];
}

export default function FeaturedProducts({ data }: FeaturedProductsProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();
  const handleNavigation = () =>{
    navigation.push('Products', {category: data[0].category});
  }
  return (
    <View style={styles.container}>
    
      <View style={styles.flatListContainer}>
        <FlatList
          ListHeaderComponent={()=>(
            <Pressable onPress={handleNavigation} style={styles.header}>
            <Text style={styles.title}>Food & Essentials</Text>
            <Text style={styles.seeMore}>See more</Text>
          </Pressable>
          )}
          data={data}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          keyExtractor={(item) => item.product_name}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <ProductCard data={item} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    color: 'black',
  },
  seeMore: {
    fontSize: 12,
    color: 'gray',
  },
  flatListContainer: {
    width: '100%',
  },
  flatListContent: {
    flexGrow: 1,
  },
  itemContainer: {
    width: '50%',
    padding:1
  },
});