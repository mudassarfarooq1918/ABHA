import {colors, fonts} from '@constants';
import React, {memo} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const ButtonPrimary = memo(
  ({title, onPress, disabled, style, textStyle}: IProps) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.container, style]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  },
);

export default ButtonPrimary;

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.black,
    marginHorizontal: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.MONTSERRAT_BOLD,
  },
});
