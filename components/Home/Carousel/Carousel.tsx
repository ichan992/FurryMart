import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { Banner } from '../../../Products';

const {width} = Dimensions.get('window');
const ITEM_LENGTH = width;

export default function Carousel() {
  return (
    <>
      <View style={style.carouselContainer}>
        <FlatList
          data={Banner}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          snapToInterval={Dimensions.get('window').width}
          renderItem={({item}) => (
            <View style={{width: ITEM_LENGTH}}>
              <ImageBackground
                style={{flex: 1}}
                resizeMode="cover"
                source={item}></ImageBackground>
            </View>
          )}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({
  carouselContainer: {
    height: 200,
  },
  carouselItem: {},
});
