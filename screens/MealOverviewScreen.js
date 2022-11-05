import { View, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { MealItem } from '../components/MealItem';

export const MealOverviewSceen = ({ route }) => {
  const categoryId = route.params.categoryId;
  const mealDisplayDat = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View>
      <FlatList
        data={mealDisplayDat}
        keyExtractor={(itemData) => itemData.id}
        renderItem={({ item }) => (
          <MealItem
            title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            affordability={item.affordability}
            complexity={item.complexity}
          />
        )}
      />
    </View>
  );
};
