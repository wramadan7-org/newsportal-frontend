import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useSelector, useDispatch} from 'react-redux';
import changePasswordActions from '../redux/actions/personal';

function ChangePassword({navigation}) {
  const dispatch = useDispatch();

  const changeValidation = yup.object().shape({
    oldPassword: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Please enter your old password'),
    newPassword: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Please enter new password'),
  });

  const {token} = useSelector((state) => state.auth);
  const changePasswordState = useSelector((state) => state.personal);

  const changed = async (values) => {
    console.log(values);
    const changedPassword = await dispatch(
      changePasswordActions.changePassword(token, values),
    );
    if (changedPassword && changedPassword.action.payload.data.success) {
      await Alert.alert('Success', 'Password has been changed', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Profile'),
        },
      ]);
    } else {
      await Alert.alert('Fail', 'Please enter a valid password');
    }
  };

  return (
    <ScrollView style={styles.scroll}>
      {changePasswordState.isLoading && (
        <View style={styles.viewIndicator}>
          <ActivityIndicator
            size="large"
            color="blue"
            style={styles.indicator}
          />
        </View>
      )}
      <Formik
        validationSchema={changeValidation}
        initialValues={{
          oldPassword: '',
          newPassword: '',
        }}
        onSubmit={(values) => changed(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.grup}>
              <View style={styles.viewLabel}>
                <Text style={styles.label}>Old Password</Text>
              </View>
              <View style={styles.viewTxtInput}>
                <TextInput
                  onChangeText={handleChange('oldPassword')}
                  onBlur={handleBlur('oldPassword')}
                  value={values.oldPassword}
                  placeholder="Old password"
                  secureTextEntry
                />
              </View>
            </View>
            {errors.oldPassword && touched.oldPassword && (
              <Text style={styles.errorText}>{errors.oldPassword}</Text>
            )}

            <View style={styles.grup}>
              <View style={styles.viewLabel}>
                <Text style={styles.label}>New Password</Text>
              </View>
              <View style={styles.viewTxtInput}>
                <TextInput
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                  value={values.newPassword}
                  placeholder="New password"
                  secureTextEntry
                />
              </View>
            </View>
            {errors.newPassword && touched.newPassword && (
              <Text style={styles.errorText}>{errors.newPassword}</Text>
            )}

            <View style={styles.viewBtn}>
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.btnChange}
                disabled={!isValid}>
                <Text style={styles.textBtn}>CHANGE</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    margin: 10,
  },
  grup: {
    //  borderWidth: 1,
    height: 90,
    padding: 10,
    marginVertical: 10,
  },
  viewLabel: {
    height: 30,
    //  borderWidth: 1,
  },
  label: {
    fontSize: 15,
    color: 'black',
    fontWeight: '900',
  },
  viewTxtInput: {
    flex: 1,
    borderBottomWidth: 2,
  },
  viewBtn: {
    //  borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  btnChange: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: 100,
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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

export default ChangePassword;
