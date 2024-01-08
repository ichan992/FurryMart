import {useRef, useState, useEffect} from 'react';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
  ImageSourcePropType,
} from 'react-native';

const {width, height} = Dimensions.get('window');
const ProductThumbnail = ({images}: {images: ImageSourcePropType[]}) => {
  const ITEM_LENGTH = width;
  const windowWidth = Dimensions.get('window').width;
  const carouselRef = useRef<FlatList>(null);
  const miniCarouselRef = useRef<FlatList>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  useEffect(() => {
    carouselRef.current?.scrollToIndex({
      index: carouselIndex,
      animated: true,
    });
    miniCarouselRef?.current?.scrollToIndex({
      index: carouselIndex,
      animated: true,
    });
  }, [carouselIndex]);
  const CarouselMoveToImage = (index: number) => {
    if (index >= 0) {
      setCarouselIndex(index);
      carouselRef?.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
      miniCarouselRef?.current?.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
    }
  };
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentIndex = event.nativeEvent.contentOffset.x / windowWidth;
    if (currentIndex < 0) {
      setCarouselIndex(0);
      carouselRef?.current?.scrollToIndex({index: 0, animated: false});
    } else {
      setCarouselIndex(Math.round(currentIndex));
    }
  };

  if (images) {
    return (
      <View style={styles.container}>
        <FlatList
          ref={carouselRef}
          initialScrollIndex={carouselIndex}
          data={images}
          decelerationRate={'fast'}
          onScrollToIndexFailed={error => {
            setCarouselIndex(error.index);
          }}
          onMomentumScrollEnd={onScroll}
          snapToAlignment="start"
          getItemLayout={(data, index) => ({
            length: ITEM_LENGTH,
            offset: ITEM_LENGTH * index,
            index,
          })}
          snapToInterval={Dimensions.get('window').width}
          renderItem={({item}) => {
            return (
              <View style={{width: ITEM_LENGTH}}>
                <View style={styles.itemContent}>
                  <Image source={item} style={styles.itemImage} />
                </View>
              </View>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View
          style={{
            height: '20%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 5,
          }}>
          <FlatList
            data={images}
            ref={miniCarouselRef}
            initialScrollIndex={carouselIndex}
            snapToAlignment="start"
            decelerationRate={'normal'}
            renderItem={({item, index}) => {
              return (
                <Pressable
                  onPress={() => CarouselMoveToImage(index)}
                  style={[
                    styles.carouselItemsContainer,
                    index === carouselIndex && styles.carouselSelected,
                  ]}>
                  <Image source={item} style={styles.itemImage} />
                </Pressable>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    );
  }
};
export default ProductThumbnail;
const styles = StyleSheet.create({
  carouselItemsContainer: {
    width: 100,
    height: 100,
  },
  carouselSelected: {
    borderWidth: 2,
    borderColor: 'black',
  },
  container: {
    height: height / 1.5,
  },
  itemContent: {
    alignItems: 'center',
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 24,
    position: 'absolute',
    color: 'white',
    fontWeight: '600',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
