import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {View, Text, StyleSheet, BackHandler} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {RadioButton, Button} from 'react-native-paper';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

interface SelectionBottomSheetProps {
  sortBy: string;
  handleSort: (sortBy: string) => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
  handleFilters: (filter: string) => void;
}

const SelectionBottomSheet = ({
  sortBy,
  handleSort,
  bottomSheetModalRef,
  handleFilters,
}: SelectionBottomSheetProps) => {
  const [isModalFocused, setIsModalFocused] = useState(false);
  const [selectedSortBy, setSelectedSortBy] = useState(sortBy);
  const [selectedFilter, setSelectedFilter] = useState('');
  const handleApplyFilters = () => {
    handleFilters(selectedFilter);
    handleSort(selectedSortBy);
    bottomSheetModalRef?.current?.close();
  };
  useFocusEffect(
    useCallback(() => {
      // addEventListener and removeEventListener must refer to the same function
      const onBackPress = () => {
        if (isModalFocused) {
          bottomSheetModalRef.current?.dismiss();
          return true; // TS complains if handler doesn't return a boolean
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [isModalFocused]),
  );
  const handleSheetChanges = useCallback((index: number) => {
    if (index < 1) {
      setIsModalFocused(false);
    } else {
      setIsModalFocused(true);
    }
  }, []);

  const snapPoints = useMemo(() => ['25%', '50%', '75%', '90%'], []);
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <BottomSheetModal
          onChange={handleSheetChanges}
          backdropComponent={() => (
            <View style={{backgroundColor: 'black'}}></View>
          )}
          ref={bottomSheetModalRef}
          index={3}
          snapPoints={snapPoints}>
          <View style={styles.contentContainer}>
            <View style={styles.filterContainer}>
              <Text style={styles.subHeading}>Sort by</Text>
              <RadioButton.Group
                onValueChange={newValue => setSelectedSortBy(newValue)}
                value={selectedSortBy}>
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Recommended (default)"
                  value="default"
                />
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Price: High to low"
                  value="high_low"
                />
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Price: Low to high"
                  value="low_high"
                />
              </RadioButton.Group>
            </View>
            <View style={styles.filterContainer}>
              <Text style={styles.subHeading}>Filter</Text>
              <RadioButton.Group
                onValueChange={newValue => setSelectedFilter(newValue)}
                value={selectedFilter}>
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Price < 3000"
                  value="less_than"
                />
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Price > 3000"
                  value="greater_than"
                />
                <RadioButton.Item
                  uncheckedColor="orange"
                  color="orange"
                  label="Rating 4.0+"
                  value="rating_4"
                />
              </RadioButton.Group>
            </View>
            <Button
              onPress={handleApplyFilters}
              labelStyle={{fontSize: 16}}
              style={{
                width: '100%',
                borderRadius: 5,
                backgroundColor: 'orange',
              }}
              mode="contained">
              {'APPLY FILTER'}
            </Button>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  textHeader: {
    color: 'black',
    fontSize: 26,
    fontWeight: 'bold',
  },
  filterContainer: {
    gap: 5,
  },
  subHeading: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filterText: {
    color: 'black',
  },
});

export default SelectionBottomSheet;
