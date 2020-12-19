import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import { Header, Item } from 'native-base'
import authActions from '../redux/actions/auth';
import profileActions from '../redux/actions/personal';
import {useDispatch, useSelector} from 'react-redux';
// import empty image
import emptyImage from '../default-image/empty.jpg';
// import env
import {APP_PORT} from '@env';

const Profile = () => {
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);
  const profileState = useSelector((state) => state.personal);

  const logout = () => {
    console.log('PRESS');
    dispatch(authActions.logout());
  };

  React.useEffect(() => {
    dispatch(profileActions.getPersonal(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <ScrollView style={styles.parent}>
      {profileState.isLoading && (
        <View style={styles.viewIndicator}>
          <ActivityIndicator
            size="large"
            color="blue"
            style={styles.indicator}
          />
        </View>
      )}
      {profileState.dataPersonal &&
        profileState.dataPersonal.map((o) => (
          <>
            <View style={styles.body} key={o.id}>
              <View style={styles.viewPhoto}>
                <Image
                  style={styles.photoProfile}
                  source={
                    o.photo !== null
                      ? o.photo.length > 0
                        ? {uri: `${APP_PORT}${o.photo}`}
                        : emptyImage
                      : emptyImage
                  }
                />
                <View>
                  <Text style={styles.textNameProfile}>{o.name}</Text>
                </View>
              </View>
              <View style={styles.viewDesc}>
                <View style={styles.descTop}>
                  <View style={styles.viewName}>
                    <Text style={styles.title}>Name</Text>
                    <Text style={styles.desc}>{o.name}</Text>
                  </View>

                  <View style={styles.viewDate}>
                    <Text style={styles.title}>Date</Text>
                    <Text style={styles.desc}>{o.birthdate}</Text>
                  </View>
                </View>
                <View style={styles.viewEmail}>
                  <Text style={styles.title}>Email</Text>
                  <Text style={styles.desc}>{o.email}</Text>
                </View>

                <View style={styles.logout}>
                  <TouchableOpacity style={styles.btn} onPress={logout}>
                    <Text style={styles.txtBtn}>LOGOUT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
  },
  body: {
    //  alignSelf: 'center',
    //  alignItems: 'center',
    padding: 20,
    width: '100%',
    //  borderWidth: 1,
    flex: 1,
  },
  viewPhoto: {
    width: 300,
    //  height: 150,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    //  borderWidth: 1
  },
  photoProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  textNameProfile: {
    fontSize: 25,
    marginTop: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  viewDesc: {
    flex: 6,
  },
  descTop: {
    //  borderWidth: 1
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  viewName: {
    borderRightWidth: 1,
    flex: 6,
    justifyContent: 'center',
    height: 90,
    alignItems: 'center',
  },
  viewDate: {
    borderLeftWidth: 1,
    flex: 6,
    justifyContent: 'center',
    height: 90,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  desc: {
    marginVertical: 5,
    fontSize: 20,
    fontStyle: 'italic',
  },
  viewEmail: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logout: {
    width: '100%',
    marginVertical: 20,
    alignSelf: 'center',
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '100%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  txtBtn: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
  viewIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // borderWidth: 1,
    height: '100%',
  },
  indicator: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default Profile;
