import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Main from './src/screens/Main';

import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store().store}>
      <PersistGate loading={null} persistor={store().persistore}>
        <SafeAreaView style={styles.parent}>
          <Main />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
});
