import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { ConvertNumberFormat } from '../../helpers';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParam } from '../../Navigation/Home/HomeStack';
import { useNavigation } from '@react-navigation/native';
import ProductInterface from '../../global.types';
import Ionicons from 'react-native-vector-icons/Ionicons'
export default function ProductCard({ data }: { data: ProductInterface }) {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();

  const NavigateNextScreen = () => {
    navigation.push('ProductDetailScreen', { product: data });
  };

  return (
    <Card onPress={NavigateNextScreen} style={styles.container} elevation={1}>
      <Card.Cover style={styles.image} source={data.thumbnail} />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.title}>
          {data.product_name}
        </Text>
        <View style={styles.details}>
          <Text style={styles.price}>{ConvertNumberFormat(data.price)}</Text>
          <View style={styles.ratingContainer}>
              <Ionicons color={'orange'} name='star' size={12}/>
            <Text style={styles.rating}>{`${5} (117)`}</Text>
          </View>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderColor: '#ECECEC',
    backgroundColor: 'white',
    overflow: 'hidden',
    marginBottom: 5,
  },
  image: {
    height: 200, // Adjust the height as needed
    borderRadius: 0,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    marginBottom: 5,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    color: 'orange',
    fontWeight: '700',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#ffb347',
    marginLeft: 5,
  },
});