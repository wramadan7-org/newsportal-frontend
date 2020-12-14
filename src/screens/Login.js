import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';

// import action
import loginActions from '../redux/actions/auth';

const Login = () => {
  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email address is required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  const doLogin = async (values) => {
    const actionLogin = await dispatch(loginActions.login(values));
    if (actionLogin && actionLogin.action.payload.data.success) {
      Alert.alert('Success', 'Login successfully');
    } else {
      Alert.alert('Fail', 'Email or password invalid');
    }
  };

  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.header}>LOGIN</Text>
      <View style={styles.viewGroupInput}>
        <Formik
          validationSchema={loginValidation}
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={(values) => doLogin(values)}>
          {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isValid,
          }) => (
            <>
              <View style={styles.viewInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  placeholder="Email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
              </View>
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={styles.viewInput}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry
                />
              </View>
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <TouchableOpacity style={styles.link}>
                <Text style={styles.textLink}>Forgot your password ?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={handleSubmit}
                disabled={!isValid}>
                <Text style={styles.textBtn}>LOGIN</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  viewGroupInput: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
  },
  viewInput: {
    height: 75,
    // elevation: 1,
    //  borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    marginVertical: 20,
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12,
  },
  link: {
    alignItems: 'flex-end',
  },
  textLink: {
    fontSize: 15,
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
  },
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default Login;
