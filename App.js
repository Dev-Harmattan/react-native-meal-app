import 'react-native-gesture-handler';
import { useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CategoryScreen } from './screens/CategoryScreen';
import { MealOverviewSceen } from './screens/MealOverviewScreen';
import { FavoriteScreen } from './screens/FavoriteScreen';
import { MealDetailScreen } from './screens/MealDetailScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const Root = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: 'All Categories',
        }}
      />
      <Drawer.Screen name="Favorites" component={FavoriteScreen} />
    </Drawer.Navigator>
  );
};

export default function App() {
  const [fontLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito/static/Nunito-Regular.ttf'),
    'nunito-semi-bold': require('./assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito/static/Nunito-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#3f2f25' },
            }}
          >
            <Stack.Screen
              name="Root"
              component={Root}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meal Overview" component={MealOverviewSceen} />
            <Stack.Screen
              name="Meal Details"
              options={{}}
              component={MealDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
