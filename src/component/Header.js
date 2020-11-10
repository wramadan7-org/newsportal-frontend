import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Icons from 'react-native-vector-icons/FontAwesome'

function Header () {
  return (
       <View style={styles.parent}>
          <TouchableOpacity onPress={() => console.log('klik')}>
             <Icons name='bell' size={20} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icons name='search' size={20} />
          </TouchableOpacity>
       </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: 'row',
    width: 80,
    marginRight: 20,
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default Header
