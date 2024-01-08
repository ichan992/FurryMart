import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../components/Home/HomeScreen';
import ProductDetailScreen from '../../components/ProductDetails/ProductDetailScreen';
import ProductsScreen from '../../components/Products/ProductsScreen';
import ProductInterface from '../../global.types';

export type RootStackParam = {
  Home : any,
  HomeScreen :object;
  ProductDetailScreen : {
      product: ProductInterface
  };
  Products : object
}
const Stack = createStackNavigator<RootStackParam>();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
       <Stack.Screen
        name="Products"
        component={ProductsScreen}
      />
    </Stack.Navigator>
  );
}
