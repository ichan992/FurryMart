import React, { useEffect, useMemo, useState,useRef, useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import ProductCard from "../ProductCard/ProductCard";
import { ProductList } from "../../Products";
import { SafeAreaView } from "react-native-safe-area-context";
import FilterList from "./FilterList";
import SelectionBottomSheet from "../global/SelectionBottomSheet";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import ProductInterface  from "../../global.types";
import EmptySearch from "../global/EmptySearch";

export default function ProductsScreen({ navigation, route } : any) {
  const { params: { category = 'all' } = {} } = route;
  const [data, setData] = useState<ProductInterface[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<string>("default");
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const fetchData = () =>{
    if(category  !='all'){
       setData(ProductList.filter((product)=> product.category === category));
    }else{
      setData(ProductList);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleFilters = (selected : string) => {
    setFilter(selected)
  }
  const handleSort = (selected : string) =>{
    setSortBy(selected)
  }
 const filteredProducts = useMemo(() => {
  let filtered = [...data];
  if (filter === 'greater_than') {
    filtered = filtered.filter((product) => product.price > 3000);
  } else if (filter === 'less_than') {
    filtered = filtered.filter((product) => product.price < 3000);
  } else if (sortBy === 'low_high') {
    filtered.sort((currentProduct, nextProduct) => currentProduct.price - nextProduct.price);
  } else if (sortBy === 'high_low') {
    filtered.sort((currentProduct, nextProduct) => nextProduct.price - currentProduct.price);
  }

  return filtered;
}, [filter, sortBy, data]);
if(data.length >=1 ){
  return (
    <SafeAreaView style={{flex:1, gap: 10, backgroundColor: "white" }}>
      <FilterList openModal={handlePresentModalPress} filter={filter} sortBy={sortBy} handleFilters={handleFilters} />
      <View style={{ width: "100%" }}>
        <FlatList
          data={filteredProducts}
          numColumns={2}
          contentContainerStyle={{ width: "100%" }}
          keyExtractor={(item) => item.product_name}
          renderItem={({ item }) => (
            <View
              style={{ width: "50%", paddingHorizontal: 2, marginVertical: 5 }}
            >
              <ProductCard data={item} />
            </View>
          )}
        />
      </View>
      <SelectionBottomSheet handleFilters={handleFilters} handleSort={handleSort}sortBy={sortBy} bottomSheetModalRef={bottomSheetModalRef} />
    </SafeAreaView>
  );
}
return <EmptySearch/>;

}
