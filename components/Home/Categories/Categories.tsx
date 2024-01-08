import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {RootStackParam} from '../../../Navigation/Home/HomeStack';
import {CategoriesProducts} from '../../../categories';

export default function Categories() {
  const navigation = useNavigation<StackNavigationProp<RootStackParam>>();

  const handleRedirect = (category: string) => {
    navigation.push('Products', {category: category});
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Categories</Text>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        data={CategoriesProducts}
        horizontal
        renderItem={({item}) => (
          <Pressable
            onPress={()=>handleRedirect(item.name)}
            style={styles.pressable}>
            <View style={styles.innerView}>
              <View style={styles.imageBackground}>
                <Image style={styles.image} source={item.icon} />
              </View>
            </View>
             <Text numberOfLines={2} adjustsFontSizeToFit style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
    color: 'black',
  },
  flatListContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    marginRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
  },
  imageBackground: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
  text: {
    color: 'black',
    fontSize: 14,
  },
});
