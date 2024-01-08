import React, { useContext, useState } from 'react';
import {StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import HomeStack from './Navigation/Home/HomeStack';
import CartStack from './Navigation/Cart/CartStack';
import CartProvider, { CartContext } from './providers/CartProvider';
import ProductsStack from './Navigation/Products/ProductsStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

function AppContent() {
  const { getTotalCount } = useContext(CartContext);
  const total = getTotalCount();
  return (
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
        return <Ionicons name={iconName} color={focused ?'orange' :'gray'} size={26}/>;
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
    <Tab.Screen name="Products"
     options={({route}) => ({
      tabBarStyle: (route => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? '';
        if (routeName === 'ProductDetailScreen') {
          return {display: 'none'};
        }
        return;
      })(route),
    })}
    
    component={ProductsStack} />
    <Tab.Screen
      options={({route}) => ({
        tabBarBadge:  total,
        tabBarBadgeStyle : {
          backgroundColor:'orange',
          color:'white',
          display : 'flex'
        },
      })}
      name="Cart"
      component={CartStack}
    />
  </Tab.Navigator>
  );
}
export default function App() {

  return (
    <NavigationContainer>
      <CartProvider>
        <AppContent/>
      </CartProvider>
    </NavigationContainer>
  );
}

