import {RootState} from '@redux/store';
import React, {memo} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './styles';
interface IProps {}

const mapStateToProps = (state: RootState) => {
  return {};
};

const ChatScreen = memo(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat Screen</Text>
    </View>
  );
});

export default connect(mapStateToProps)(ChatScreen);
