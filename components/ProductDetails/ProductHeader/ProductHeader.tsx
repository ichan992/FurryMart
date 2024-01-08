import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ProductRatings from '../Ratings/ProductRatings';
import {ConvertNumberFormat} from '../../../helpers';
interface ProductHeaderProps {
  purchase_price: number;
  discounted_price?: number;
  product_name: string;
}
export default function ProductHeader({
  purchase_price,
  discounted_price,
  product_name,
}: ProductHeaderProps) {
  return (
    <View style={{gap: 10}}>
      <View>
        <Text
          adjustsFontSizeToFit
          numberOfLines={2}
          style={styles.productTitle}>
          {product_name}
        </Text>
      </View>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
          <Text style={styles.priceText}>
            {ConvertNumberFormat(purchase_price)}
          </Text>
          {discounted_price && (
            <Text style={styles.discountedPriceText}>
              {ConvertNumberFormat(discounted_price)}
            </Text>
          )}
        </View>
        <ProductRatings rating={5.0} total={320} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  priceText: {
    fontSize: 24,
    fontWeight: '500',
    color: 'orange',
  },
  discountedPriceText: {
    fontSize: 16,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  productTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: '500',
  },
});
