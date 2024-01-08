
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../components/Cart/CartScreen';

const Stack = createStackNavigator();

export default function CartStack() {
    return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
    );
}
  