import { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { MealDetails } from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
import { Subtitle } from '../components/mealDetail/Subtitle';
import { List } from '../components/mealDetail/List';

export const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
    });
  }, [selectedMeal, navigation]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.textStyle}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredient</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'nunito-semi-bold',
    color: 'white',
    margin: 8,
  },
  textStyle: {
    color: 'white',
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e2b497',
    fontFamily: 'nunito-semi-bold',
  },
  subTitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
