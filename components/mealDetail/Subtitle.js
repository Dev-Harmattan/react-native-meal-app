import {Text, View, StyleSheet} from 'react-native';
export const Subtitle = ({children}) => {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#e2b497',
    fontFamily: 'nunito-semi-bold',
  },
  subTitleContainer: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
});


