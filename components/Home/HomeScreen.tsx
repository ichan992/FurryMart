import React, {useEffect, useState} from 'react';
import { StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { EssentialsProduct } from '../../Products';
import Carousel from './Carousel/Carousel';
import FeaturedProducts from './FeaturedProducts';
import {ScrollView} from 'react-native-gesture-handler';
import Categories from './Categories/Categories';
import ProductInterface from '../../global.types';
import { useScrollToTop } from '@react-navigation/native';

export default function HomeScreen() {
  const [data, setData] = useState<ProductInterface[]>([]);

  //set products
  useEffect(() => {
    setData(EssentialsProduct);
  }, []);
  const ref = React.useRef(null);

  //if pressed home twice scrolls to top
  useScrollToTop(ref);
  
  if (data) {
    return (
      <ScrollView ref={ref} showsVerticalScrollIndicator>
        <SafeAreaView style={styles.container}>
          <Carousel />
          <View style={styles.HomeScreenBodyContainer}>
            <Categories />
            <FeaturedProducts data={data}/>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
  return null;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    gap: 10,
  },
  HomeScreenBodyContainer :{
    paddingHorizontal: 10, 
    gap: 10
  }
});
