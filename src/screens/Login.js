import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'

const Login = ({ navigation }) => {
  return (
      <ScrollView style={styles.parent}>
         {/* <ScrollView> */}
            <Text style={styles.header}>LOGIN</Text>
            <View style={styles.viewGroupInput}>
               <View style={styles.viewInput}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput placeholder='Email' />
               </View>

               <View style={styles.viewInput}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput placeholder='Password' secureTextEntry />
               </View>

               <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.textLink}>Forgot your password ?</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
                  <Text style={styles.textBtn}>LOGIN</Text>
               </TouchableOpacity>
            </View>
         {/* </ScrollView> */}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 10
  },
  header: {
    fontSize: 60,
    fontWeight: 'bold'
  },
  viewGroupInput: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20
  },
  viewInput: {
    height: 75,
    elevation: 1,
    //  borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    justifyContent: 'center',
    marginVertical: 20
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 12
  },
  link: {
    alignItems: 'flex-end'
  },
  textLink: {
    fontSize: 15
  },
  btn: {
    marginVertical: 25,
    //  borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'gray'
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default Login
