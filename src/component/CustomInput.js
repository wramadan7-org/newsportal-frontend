import React from 'react';
import {Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = (props) => {
  const {
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputPorps
  } = props;

  const hasError = errors[name] && touched[name];

  return (
    <>
      <TextInput
        // style = {styles.textInput}
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        {...inputPorps}
      />
      {hasError && <Text style={styles.errorText}>{errors[name]}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  errorText: {
    fontSize: 10,
    color: 'red',
  },
});

export default CustomInput;
