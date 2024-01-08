import React from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import HomeStack from './Navigation/Home/HomeStack';
import CartStack from './Navigation/Cart/CartStack';
import CartProvider from './providers/CartProvider';
import ProductsStack from './Navigation/Products/ProductsStack';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <CartProvider>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home-outline' : 'home-outline';
              }
              if (route.name === 'Cart') {
                iconName = focused ? 'cart-outline' : 'cart-outline';
              }

              if (route.name === 'Products') {
                iconName = focused ? 'apps-outline' : 'apps-outline';
              }

              return '';
            },
            tabBarActiveTintColor: 'orange',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (routeName === 'ProductDetailScreen') {
                  return {display: 'none'};
                }
                return;
              })(route),
            })}
            name="Home"
            component={HomeStack}
          />
          <Tab.Screen name="Products" component={ProductsStack} />
          <Tab.Screen
            options={({route}) => ({
              tabBarStyle: (route => {
                const routeName = getFocusedRouteNameFromRoute(route) ?? '';
                if (routeName === 'ProductDetailScreen') {
                  return {display: 'none'};
                }
                return;
              })(route),
            })}
            name="Cart"
            component={CartStack}
          />
        </Tab.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
