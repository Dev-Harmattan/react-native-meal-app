import { View, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { CategoryGridTile } from '../components/CategoryGridTile';

const renderCategoryItem = ({ item }) => {
  return <CategoryGridTile title={item.title} color={item.color} />;
};

export const CategoryScreen = () => {
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
