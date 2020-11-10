import React from 'react'
import {
  View, Text, ScrollView, StyleSheet,
  TouchableOpacity, TextInput, Image
} from 'react-native'
import { DatePicker } from 'native-base'

function EditProfile () {
  return (
      <ScrollView style={styles.parent}>
         <View>
            <View style={styles.viewPhoto}>
               <Image style={styles.photoProfile} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
               <View>
                  <Text style={styles.chosePhoto}>Choose photo profile</Text>
               </View>
            </View>
            <View style={styles.viewGroupInput}>
               {/* <View style={styles.viewInput}>
                  <DatePicker
                     defaultDate={new Date(2020 - 1 - 1)}
                     minimumDate={new Date(1900 - 12 - 12)}
                     maximumDate={new Date(2021 - 12 - 12)}
                     locale={'en'}
                     timeZoneOffsetInMinutes = {undefined}
                     modalTransparent = {false}
                     animationType={'fade'}
                     androidMode={'default'}
                     placeHolderText="Select date"
                     textStyle={{ color: 'green' }}
                     placeHolderTextStyle={{ color: '#d3d3d3' }}
                     onDateChange={this.setDate}
                     disabled={false}
                  />
               </View> */}
               <View style={styles.viewInput}>
                  <Text style={styles.label}>Name</Text>
                  <TextInput style={styles.input} placeholder='Name' />
               </View>

               <View style={styles.viewInput}>
                  <Text style={styles.label}>Birthdate</Text>
                  <TextInput style={styles.input} placeholder='Birthdate' />
               </View>

               <View style={styles.viewInput}>
                  <Text style={styles.label}>Email</Text>
                  <TextInput style={styles.input} placeholder='Email' />
               </View>

               <View style={styles.viewInput}>
                  <Text style={styles.label}>Password</Text>
                  <TextInput style={styles.input} placeholder='Password' secureTextEntry />
               </View>
            </View>

            <TouchableOpacity style={styles.btn}>
               <Text style={styles.textBtn}>Edit</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    padding: 20
  },
  viewPhoto: {
    //  borderWidth: 1,
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoProfile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginRight: 10
  },
  chosePhoto: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  viewGroupInput: {
    marginVertical: 20
  },
  viewInput: {
    marginVertical: 10
  },
  label: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 15
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'darkgray'
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
    fontWeight: 'bold',
    color: 'white'
  }
})

export default EditProfile
