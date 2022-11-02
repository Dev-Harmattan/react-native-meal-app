import {useEffect, useCallback} from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import {CategoryScreen} from './screens/CategoryScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

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
  },[])

  const onLayoutRootView = useCallback(async () => {
    if(fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if(!fontLoaded) {
    return null;
  }


  return (
    <>
    <StatusBar style='light' />
      <View style={styles.container} onLayout={onLayoutRootView}>
        <CategoryScreen />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
