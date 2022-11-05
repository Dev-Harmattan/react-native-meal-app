import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

export const CategoryScreen = ({ navigation }) => {

  const handleCategoryItemPress = (id) => {
    navigation.navigate('Meal Overview', {
      categoryId: id
    });
  };

  const renderCategoryItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={() => handleCategoryItemPress(item.id)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </View>
  );
};
