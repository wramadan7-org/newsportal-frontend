import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
// import redux
import {useSelector, useDispatch} from 'react-redux';
// import actions
import profileActions from '../redux/actions/personal';
// import imagepicker
import ImagePicker from 'react-native-image-picker';
// import env
// import {APP_PORT} from '@env';
const APP_PORT = 'http://192.168.1.39:8080';
// import Formik and yup
import {Formik} from 'formik';
import * as yup from 'yup';
// import emptyImage
import emptyImage from '../default-image/empty.jpg';
// import modal
import AlertModal from '../component/ModalAlert';

const EditProfile = ({navigation}) => {
  const dispatch = useDispatch();

  const profileState = useSelector((state) => state.personal);
  const {token} = useSelector((state) => state.auth);

  const [avatar, setAvatar] = React.useState(null);
  const [sourcePhoto, setSourcePhoto] = React.useState(null);

  const profileValidation = yup.object().shape({
    name: yup.string().required('Name is required'),
    birthdate: yup.date().required('Date is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
  });
  console.log(profileState);

  // choosePhoto
  const choosePhoto = () => {
    let options = {
      mediaType: 'photo',
      noData: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        // eslint-disable-next-line no-alert
        alert(response.customButton);
      } else {
        const source = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        console.log(source);
        setAvatar(source.uri);
        setSourcePhoto(source);
      }
    });
  };

  // update
  const updateProfile = async (values) => {
    console.log(values);

    if (sourcePhoto === null) {
      const updated = await dispatch(
        profileActions.updatePersonal(token, values),
      );

      if (updated.action && updated.action.payload.data.success) {
        Alert.alert('Success', 'Update successfullt');
        await dispatch(profileActions.getPersonal(token));
      } else {
        Alert.alert('Fail', 'Update fail');
      }
    } else {
      const dataFm = new FormData();
      dataFm.append('name', values.name);
      dataFm.append('birthdate', values.birthdate);
      dataFm.append('email', values.email);
      dataFm.append('photo', sourcePhoto);

      const updated = await dispatch(
        profileActions.updatePersonalFormData(token, dataFm),
      );
      if (updated.action && updated.action.payload.data.success) {
        Alert.alert('Success', 'Update successfullt');
        await dispatch(profileActions.getPersonal(token));
      } else {
        Alert.alert('Fail', 'Update fail');
      }
    }

    // dispatch(profileActions.getPersonal(token));
  };

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
      {!profileState.isLoading && !profileState.isError && (
        <View>
          <Formik
            initialValues={{
              name: profileState.dataPersonal[0].name,
              birthdate: profileState.dataPersonal[0].birthdate,
              email: profileState.dataPersonal[0].email,
            }}
            validationSchema={profileValidation}
            onSubmit={(values) => updateProfile(values)}>
            {({
              handleBlur,
              handleChange,
              handleSubmit,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <>
                <View style={styles.viewPhoto}>
                  <Image
                    style={styles.photoProfile}
                    source={
                      avatar === null
                        ? profileState.dataPersonal[0].photo === null
                          ? emptyImage
                          : {
                              uri: `${APP_PORT}/${profileState.dataPersonal[0].photo}`,
                            }
                        : {uri: avatar}
                    }
                  />
                  <TouchableOpacity onPress={choosePhoto}>
                    <Text style={styles.chosePhoto}>Choose photo profile</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.viewGroupInput}>
                  <View style={styles.viewInput}>
                    <Text style={styles.label}>Name</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                  </View>
                  {errors.name && touched.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}

                  <View style={styles.viewInput}>
                    <Text style={styles.label}>Birthdate</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('birthdate')}
                      onBlur={handleBlur('birthdate')}
                      value={values.birthdate}
                      keyboardType="numeric"
                    />
                  </View>
                  {errors.birthdate && touched.birthdate && (
                    <Text style={styles.errorText}>{errors.birthdate}</Text>
                  )}

                  <View style={styles.viewInput}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      keyboardType="email-address"
                      value={values.email}
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <View style={styles.viewInput}>
                    <View style={styles.viewPassword}>
                      <Text style={styles.label}>Password</Text>
                      <TouchableOpacity
                        style={styles.changeBtn}
                        onPress={() => navigation.navigate('ChangePassword')}>
                        <Text style={styles.changeTxt}>Change</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                  {/* onPress={this.goToEdit} */}
                  <Text style={styles.textBtn}>Edit</Text>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </View>
      )}
      {profileState.isError && Alert.alert('Error', `${profileState.alertMsg}`)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20,
  },
  viewPhoto: {
    //  borderWidth: 1,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight: 10,
  },
  chosePhoto: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewGroupInput: {
    marginVertical: 20,
  },
  viewInput: {
    marginVertical: 10,
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray',
  },
  btn: {
    marginVertical: 25,
    //  borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  viewPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  changeBtn: {
    // borderWidth: 5,
    alignItems: 'flex-end',
    width: 70,
  },
  changeTxt: {
    color: 'blue',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
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

export default EditProfile;
