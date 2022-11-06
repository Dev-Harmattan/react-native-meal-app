import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet } from 'react-native';

export const IconButton = ({ onPress, icon, color }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.buttonPress}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonPress: {
    opacity: 0.5,
  },
});
