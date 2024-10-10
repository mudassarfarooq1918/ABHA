import {colors, fonts} from '@constants';
import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface IProps {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  placeholderTextColor?: string;
  children?: JSX.Element;
  multiline?: boolean;
  keyboardType?: any;
  editable?: boolean;
}

const Input = memo(
  ({
    style,
    textStyle,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    secureTextEntry,
    children,
    multiline,
    editable,
  }: IProps) => {
    return (
      <View style={[styles.container, style]}>
        <TextInput
          style={[styles.textInput, textStyle]}
          placeholder={placeholder ?? 'Type here...'}
          placeholderTextColor={placeholderTextColor ?? colors.gray}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType="email-address"
          editable={editable}
          multiline={multiline}
        />
        {children}
      </View>
    );
  },
);

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
  },
  textInput: {
    color: colors.black,
    backgroundColor: colors.white,
    flex: 1,
    fontFamily: fonts.MONTSERRAT_MEDIUM,
    paddingHorizontal: 5,
    fontSize: 14,
  },
});
