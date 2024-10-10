import store from '@redux/store';
import AuthNav from '@routes/auth/auth.routes';
import Routes from '@routes/routes';
import React, {memo} from 'react';
import {MenuProvider} from 'react-native-popup-menu';
import {ToastProvider} from 'react-native-toast-notifications';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

interface IProps {}

const App = memo(({}: IProps) => {
  return (
    <ToastProvider>
      <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
          <MenuProvider>
            <Routes />
          </MenuProvider>
        </PersistGate>
      </Provider>
    </ToastProvider>
  );
});

export default App;
