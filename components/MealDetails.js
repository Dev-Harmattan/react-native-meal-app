import { View, Text, StyleSheet } from 'react-native';

export const MealDetails = ({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
      <Text style={[styles.detailsItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
