
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailScreen from '../../components/ProductDetails/ProductDetailScreen';
import ProductsScreen from '../../components/Products/ProductsScreen';
import { RootStackParam } from '../Home/HomeStack';
const Stack = createStackNavigator<RootStackParam>();

export default function ProductsStack() {

    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={ProductsScreen} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} />
    </Stack.Navigator>
    );
}
  