import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'

function Register ({ navigation }) {
  return (
      <ScrollView style={styles.parent}>
         <Text style={styles.header}>REGISTER</Text>
         <View style={styles.viewGroupInput}>

            <View style={styles.viewInput}>
               <Text style={styles.label}>Name</Text>
               <TextInput placeholder='Name' />
            </View>

            <View style={styles.viewInput}>
               <Text style={styles.label}>Email</Text>
               <TextInput placeholder='Email' />
            </View>

            <View style={styles.viewInput}>
               <Text style={styles.label}>Password</Text>
               <TextInput placeholder='Password' secureTextEntry />
            </View>

            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
               <Text style={styles.textLink}>Already have a account ?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn}>
               <Text style={styles.textBtn}>REGISTER</Text>
            </TouchableOpacity>
         </View>
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

export default Register
