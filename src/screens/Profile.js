import React from 'react'
import {
  View, Text,
  ScrollView, Image, StyleSheet
} from 'react-native'
// import { Header, Item } from 'native-base'

const Profile = () => {
  return (
      <ScrollView style={styles.parent}>
         {/* <Header searchBar rounded>
            <Item>
               <TouchableOpacity>
                  <Text>Search</Text>
               </TouchableOpacity>
            </Item>
         </Header> */}
         <View style={styles.body}>
            <View style={styles.viewPhoto}>
               <Image style={styles.photoProfile} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
               <View>
                  <Text style={styles.textNameProfile}>Wahyu Ramadan</Text>
               </View>
            </View>
            <View style={styles.viewDesc}>
               <View style={styles.descTop}>
                  <View style={styles.viewName}>
                     <Text style={styles.title}>Name</Text>
                     <Text style={styles.desc}>Wahyu Ramadan</Text>
                  </View>

                  <View style={styles.viewDate}>
                     <Text style={styles.title}>Date</Text>
                     <Text style={styles.desc}>2000-12-12</Text>
                  </View>
               </View>
               <View style={styles.viewEmail}>
                  <Text style={styles.title}>Email</Text>
                  <Text style={styles.desc}>wramadan1203@gmail.com</Text>
               </View>
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
    //  alignSelf: 'center',
    //  alignItems: 'center',
    padding: 20,
    width: '100%',
    //  borderWidth: 1,
    flex: 1
  },
  viewPhoto: {
    width: 300,
    //  height: 150,
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
    //  borderWidth: 1
  },
  photoProfile: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  textNameProfile: {
    fontSize: 25,
    marginTop: 20,
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  viewDesc: {
    flex: 6
  },
  descTop: {
    //  borderWidth: 1
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  viewName: {
    borderRightWidth: 1,
    flex: 6,
    justifyContent: 'center',
    height: 90,
    alignItems: 'center'
  },
  viewDate: {
    borderLeftWidth: 1,
    flex: 6,
    justifyContent: 'center',
    height: 90,
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15
  },
  desc: {
    marginVertical: 5,
    fontSize: 20,
    fontStyle: 'italic'
  },
  viewEmail: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile
