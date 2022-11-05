import {View, Text} from 'react-native';
import {MEALS} from '../data/dummy-data'

export 
const MealOverviewSceen = ({route}) => {
  return <View>
    <Text>Meal overview Screen - {route.params.categoryId}</Text>
  </View>
}