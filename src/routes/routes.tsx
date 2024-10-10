import {colors} from '@constants';
import {NavigationContainer} from '@react-navigation/native';
import {RootState} from '@redux/store';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {isReadyRef, navigationRef, routeNameRef} from '../../navigation-helper';
import AuthNav from './auth/auth.routes';
import MainNav from './main/main.routes';
interface IProps {}

const mapStateToProps = (state: RootState) => {
  return {};
};

//-----------------------------------------
const Routes: React.FC<IProps> = ({}) => {
  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name;
          isReadyRef.current = true;
        }}>
        <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
        {false ? (
          <>
            <SafeAreaView style={{backgroundColor: colors.primary}} />
            <SafeAreaView style={{flex: 1, backgroundColor: colors.background}}>
              <MainNav />
            </SafeAreaView>
          </>
        ) : (
          <AuthNav />
        )}
      </NavigationContainer>
    </>
  );
};

export default connect(mapStateToProps)(Routes);
