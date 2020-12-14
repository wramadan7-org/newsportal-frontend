import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {useDispatch} from 'react-redux';

// import actions
import registerActions from '../redux/actions/auth';

const Register = ({navigation}) => {
  const registerValidate = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  const dispatch = useDispatch();

  const doRegister = async (values) => {
    const dispatchRegister = await dispatch(registerActions.register(values));
    if (dispatchRegister && dispatchRegister.action.payload.data.success) {
      Alert.alert('Success', 'Register successfully', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ]);
    } else {
      Alert.alert('Fail', 'Email already registerd');
    }
  };

  return (
    <ScrollView style={styles.parent}>
      <Text style={styles.header}>REGISTER</Text>
      <View style={styles.viewGroupInput}>
        <Formik
          validationSchema={registerValidate}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={(values) => doRegister(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <>
              <View style={styles.viewInput}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                  placeholder="Name"
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
              </View>
              {errors.name && touched.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

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

              <TouchableOpacity
                style={styles.link}
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.textLink}>Already have a account ?</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.textBtn}>REGISTER</Text>
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

export default Register;
