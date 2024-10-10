import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState} from '@redux/store';
import {MainNavParamList} from '@routes/param-list';
import React, {memo} from 'react';
import {connect} from 'react-redux';
import BottomTabNav from './bottom-tabs.routes';
import {ChatScreen} from '@screens';
import {ScreenEnum} from '@constants';

const mapStateToProps = (state: RootState) => {
  return {};
};

interface IProps {}

const {Navigator, Screen} = createNativeStackNavigator<MainNavParamList>();
const MainNav = memo(({}: IProps) => {
  return (
    <Navigator
      initialRouteName={'BottomTabNav'}
      screenOptions={{headerShown: false}}>
      <Screen name="BottomTabNav" component={BottomTabNav} />

      <Screen name={ScreenEnum.Chat} component={ChatScreen} />
    </Navigator>
  );
});

export default connect(mapStateToProps)(MainNav);
