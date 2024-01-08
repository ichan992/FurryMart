import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';
import SelectionBottomSheet from '../global/SelectionBottomSheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
interface FilterListProps {
  filter: string | null;
  sortBy: string;
  handleFilters: (value: string) => void;
  openModal: () => void;
}
export default function FilterList({
  filter,
  sortBy,
  handleFilters,
  openModal,
}: FilterListProps) {
  return (
    <View
      style={{
        marginHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: 'white',
      }}>
      <Pressable
        onPress={() => openModal()}
        style={{
          borderWidth: 1,
          marginRight: 10,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          borderRadius: 10,
          borderColor: '#d3d3d3',
          backgroundColor: 'transparent',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <Ionicons name="options-outline" size={20} color={'black'} />
        </View>
      </Pressable>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            marginRight: 10,
            flexDirection: 'row',
            gap: 5,
          }}>
          <Pressable
            onPress={() => handleFilters('less_than')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 10,
              borderColor: filter === 'less_than' ? 'orange' : '#d3d3d3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={{fontSize: 12, color: 'black', fontWeight: '700'}}>
                Less than 1000
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => handleFilters('greater_than')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 10,
              borderColor: filter === 'greater_than' ? 'orange' : '#d3d3d3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={{fontSize: 12, color: 'black', fontWeight: '700'}}>
                Greater than 1000
              </Text>
            </View>
          </Pressable>
          <Pressable
            onPress={() => handleFilters('rating_4')}
            style={{
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 10,
              borderColor: filter === 'rating_4' ? 'orange' : '#d3d3d3',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
              }}>
              <Text style={{fontSize: 12, color: 'black', fontWeight: '700'}}>
                Rating 4.0+
              </Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
