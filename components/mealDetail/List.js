import { View, Text, StyleSheet } from 'react-native';
export const List = ({ data }) => {
  return data.map((dataPoint) => (
    <View style={styles.listItems} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
};

const styles = StyleSheet.create({
  listItems: {
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});
