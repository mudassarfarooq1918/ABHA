import {View, Text} from 'react-native';
import React, {memo} from 'react';
import {connect} from 'react-redux';
import {RootState} from '@redux/store';
import {styles} from './styles';

interface IProps {}

const mapStateToProps = (state: RootState) => {
  return {};
};

const SignUpScreen = memo(({}: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUpScreen</Text>
    </View>
  );
});

export default connect(mapStateToProps)(SignUpScreen);
