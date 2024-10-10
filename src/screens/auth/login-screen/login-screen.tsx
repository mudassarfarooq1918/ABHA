import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {connect} from 'react-redux';
import {RootState} from '@redux/store';
import {styles} from './styles';
import {ButtonPrimary, Input} from '@components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '@constants';

interface IProps {}

const mapStateToProps = (state: RootState) => {
  return {};
};

const LoginScreen = memo(({}: IProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ScrollView
      style={styles.scroll}
      keyboardShouldPersistTaps={'handled'}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome Back</Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            style={{marginBottom: 10, marginHorizontal: 10}}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType={'email-address'}
            children={
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="email"
                  color={colors.primary}
                  size={25}
                />
              </View>
            }
          />
          <Input
            style={{marginBottom: 10, marginHorizontal: 10}}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={!isVisible} // Toggle secureTextEntry based on isVisible state
            keyboardType={'default'}
            children={
              <TouchableOpacity
                onPress={() => setIsVisible(!isVisible)} // Toggle visibility
                activeOpacity={0.8}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name={isVisible ? 'eye-off' : 'eye'} // Change icon based on visibility
                  color={colors.primary}
                  size={25}
                />
              </TouchableOpacity>
            }
          />
          <ButtonPrimary title="Login" />
        </View>
      </View>
    </ScrollView>
  );
});

export default connect(mapStateToProps)(LoginScreen);
