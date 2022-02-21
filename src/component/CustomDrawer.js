import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
// import react-redux
import {useSelector, useDispatch} from 'react-redux';
// import env
// import {APP_PORT} from '@env';
import APP_PORT from '../consta/config';
// import empty image
import emptyImage from '../default-image/empty.jpg';
// profile action
import profileActions from '../redux/actions/personal';

export default function CustomDrawer() {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const profileState = useSelector((state) => state.personal);
  const updateState = useSelector((state) => state.personal);

  React.useEffect(() => {
    dispatch(profileActions.getPersonal(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateState.dataUpdate]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewPhoto}>
        <Image
          style={styles.photo}
          source={
            profileState.dataPersonal[0]?.photo === null
              ? emptyImage
              : {uri: `${APP_PORT}/${profileState.dataPersonal[0]?.photo}`}
          }
        />
      </View>

      <View style={styles.viewName}>
        <Text style={styles.txtName}>{profileState.dataPersonal[0]?.name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  borderWidth: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    //  backgroundColor: 'lightgrey',
  },
  viewPhoto: {
    //  borderWidth: 1,
    height: 100,
    width: 100,
    marginTop: 10,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  viewName: {
    flex: 1,
    width: '100%',
    //  borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtName: {
    fontWeight: '900',
    fontSize: 17,
    fontStyle: 'italic',
  },
});
