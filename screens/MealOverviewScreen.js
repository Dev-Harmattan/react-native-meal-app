import { useLayoutEffect } from 'react';
import { View, FlatList } from 'react-native';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealItem } from '../components/MealItem';

export const MealOverviewSceen = ({ route, navigation }) => {
  const categoryId = route.params.categoryId;
  const mealDisplayDat = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  const categoryTitle = CATEGORIES.find(catItem => catItem.id === categoryId)?.title
  useLayoutEffect(() => {
    navigation.setOptions({
      title: categoryTitle
    })
  }, [categoryTitle]);

  return (
    <View>
      <FlatList
        data={mealDisplayDat}
        keyExtractor={(itemData) => itemData.id}
        renderItem={({ item }) => (
          <MealItem
            id={item.id}
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
