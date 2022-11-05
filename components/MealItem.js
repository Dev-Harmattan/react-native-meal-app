import { Text, View, Pressable, Image, StyleSheet, Platform } from 'react-native';
export const MealItem = ({
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  return (
    <View style={styles.mealItem}>
      <Pressable android_ripple={{color: '#ccc'}} style={({ pressed}) => pressed && Platform.OS === 'ios' && styles.buttonPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailsItem}>{duration}m</Text>
            <Text style={styles.detailsItem}>
              {affordability.toUpperCase()}
            </Text>
            <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 40,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontFamily: 'nunito-semi-bold',
    textAlign: 'center',
    margin: 8,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    fontFamily: 'nunito-regular',
  },
  detailsItem: {
    marginHorizontal: 4,
  },
  buttonPress: {
    opacity: 0.5,
  },
});
