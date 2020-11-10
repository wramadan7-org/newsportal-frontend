import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

function Category () {
  return (
      <View style={styles.parent}>
         <Text>Category Screen</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Category
