import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'

function Landpage ({ navigation }) {
  return (
      <ScrollView style={styles.parent}>
         <View style={styles.body}>
            <View style={styles.viewLogo}>
               <Text style={styles.logo}>R</Text>
            </View>
            <View style={styles.viewGroupBtn}>
               <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
                  <Text style={styles.textBtn}>LOGIN</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Register')}>
                  <Text style={styles.textBtn}>REGISTER</Text>
               </TouchableOpacity>
            </View>
         </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1
  },
  body: {
    flex: 1,
    width: 300,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
    //  borderWidth: 1
  },
  viewLogo: {
    backgroundColor: 'black',
    borderRadius: 100,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    marginBottom: 70
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 190,
    color: 'white'
  },
  viewGroupBtn: {
    //  borderWidth: 1,
    width: '100%'
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

export default Landpage
